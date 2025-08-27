#!/bin/bash

# CI Status Checker Script
# This script checks the status of GitHub Actions workflows for the current branch

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
REPO_URL=$(git config --get remote.origin.url)

# Extract owner and repo from URL
if [[ $REPO_URL == *"github.com"* ]]; then
    # Handle both SSH and HTTPS URLs
    REPO_INFO=$(echo $REPO_URL | sed 's/.*github\.com[:/]\([^/]*\)\/\([^.]*\)\.git/\1\/\2/' | sed 's/\.git$//')
else
    echo -e "${RED}❌ Not a GitHub repository${NC}"
    exit 1
fi

echo -e "${BLUE}🔍 CI Status Checker${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "Repository: ${BLUE}$REPO_INFO${NC}"
echo -e "Branch: ${BLUE}$CURRENT_BRANCH${NC}"
echo ""

# Function to check if gh CLI is installed
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo -e "${YELLOW}⚠️ GitHub CLI (gh) is not installed${NC}"
        echo "Please install it from: https://cli.github.com/"
        echo ""
        echo -e "${BLUE}Alternative: Check status manually at:${NC}"
        echo "https://github.com/$REPO_INFO/actions"
        exit 1
    fi
}

# Function to check authentication
check_auth() {
    if ! gh auth status &> /dev/null; then
        echo -e "${YELLOW}⚠️ Not authenticated with GitHub CLI${NC}"
        echo "Please run: gh auth login"
        exit 1
    fi
}

# Function to get workflow runs
get_workflow_runs() {
    local branch=$1
    echo -e "${BLUE}📊 Recent workflow runs for branch '$branch':${NC}"
    echo ""

    # Get the latest 5 workflow runs for the current branch
    gh run list --branch="$branch" --limit=5 --json status,conclusion,name,createdAt,url | \
    jq -r '.[] | "\(.status)|\(.conclusion)|\(.name)|\(.createdAt)|\(.url)"' | \
    while IFS='|' read -r status conclusion name created_at url; do
        # Format the date
        formatted_date=$(date -d "$created_at" '+%Y-%m-%d %H:%M' 2>/dev/null || echo "$created_at")

        # Determine status symbol and color
        if [[ "$status" == "completed" ]]; then
            if [[ "$conclusion" == "success" ]]; then
                symbol="${GREEN}✅${NC}"
            elif [[ "$conclusion" == "failure" ]]; then
                symbol="${RED}❌${NC}"
            elif [[ "$conclusion" == "cancelled" ]]; then
                symbol="${YELLOW}⏹️${NC}"
            else
                symbol="${YELLOW}⚠️${NC}"
            fi
        elif [[ "$status" == "in_progress" ]]; then
            symbol="${BLUE}🔄${NC}"
        else
            symbol="${YELLOW}⏳${NC}"
        fi

        echo -e "$symbol $name"
        echo -e "   ${BLUE}Status:${NC} $status | ${BLUE}Result:${NC} $conclusion"
        echo -e "   ${BLUE}Date:${NC} $formatted_date"
        echo -e "   ${BLUE}URL:${NC} $url"
        echo ""
    done
}

# Function to check PR status if on a feature branch
check_pr_status() {
    local branch=$1

    if [[ "$branch" != "main" && "$branch" != "master" ]]; then
        echo -e "${BLUE}🔍 Checking for open pull requests...${NC}"

        # Check if there's an open PR for this branch
        pr_info=$(gh pr view --json number,title,url 2>/dev/null || echo "")

        if [[ -n "$pr_info" ]]; then
            pr_number=$(echo "$pr_info" | jq -r '.number')
            pr_title=$(echo "$pr_info" | jq -r '.title')
            pr_url=$(echo "$pr_info" | jq -r '.url')

            echo -e "${GREEN}📋 Open Pull Request:${NC}"
            echo -e "   ${BLUE}#$pr_number:${NC} $pr_title"
            echo -e "   ${BLUE}URL:${NC} $pr_url"
            echo ""

            # Get PR status checks
            echo -e "${BLUE}🔍 PR Status Checks:${NC}"
            gh pr checks --json name,status,conclusion,detailsUrl 2>/dev/null | \
            jq -r '.[] | "\(.status)|\(.conclusion)|\(.name)|\(.detailsUrl)"' | \
            while IFS='|' read -r status conclusion name details_url; do
                if [[ "$status" == "COMPLETED" ]]; then
                    if [[ "$conclusion" == "SUCCESS" ]]; then
                        symbol="${GREEN}✅${NC}"
                    elif [[ "$conclusion" == "FAILURE" ]]; then
                        symbol="${RED}❌${NC}"
                    else
                        symbol="${YELLOW}⚠️${NC}"
                    fi
                elif [[ "$status" == "IN_PROGRESS" ]]; then
                    symbol="${BLUE}🔄${NC}"
                else
                    symbol="${YELLOW}⏳${NC}"
                fi

                echo -e "   $symbol $name"
            done
            echo ""
        else
            echo -e "${YELLOW}⚠️ No open pull request found for branch '$branch'${NC}"
            echo -e "   Consider creating a PR to run full CI checks"
            echo ""
        fi
    fi
}

# Function to provide helpful tips
show_tips() {
    echo -e "${BLUE}💡 Helpful Tips:${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "• Run tests locally: npm run test:run"
    echo "• Check linting: npm run lint"
    echo "• Build project: npm run build"
    echo "• Format code: npx prettier --write ."
    echo "• View detailed logs: gh run view [run-id]"
    echo "• Re-run failed jobs: gh run rerun [run-id]"
    echo ""
}

# Function to check local changes
check_local_changes() {
    echo -e "${BLUE}📝 Local Repository Status:${NC}"

    # Check if there are uncommitted changes
    if [[ -n $(git status --porcelain) ]]; then
        echo -e "${YELLOW}⚠️ Uncommitted changes detected:${NC}"
        git status --short
        echo ""
    else
        echo -e "${GREEN}✅ Working directory clean${NC}"
    fi

    # Check if local branch is ahead/behind remote
    if git rev-parse --verify origin/$CURRENT_BRANCH &> /dev/null; then
        local_ahead=$(git rev-list --count origin/$CURRENT_BRANCH..$CURRENT_BRANCH)
        local_behind=$(git rev-list --count $CURRENT_BRANCH..origin/$CURRENT_BRANCH)

        if [[ $local_ahead -gt 0 ]]; then
            echo -e "${YELLOW}⚠️ Local branch is $local_ahead commit(s) ahead of remote${NC}"
        fi

        if [[ $local_behind -gt 0 ]]; then
            echo -e "${YELLOW}⚠️ Local branch is $local_behind commit(s) behind remote${NC}"
            echo -e "   Consider running: git pull origin $CURRENT_BRANCH"
        fi

        if [[ $local_ahead -eq 0 && $local_behind -eq 0 ]]; then
            echo -e "${GREEN}✅ Local branch is up to date with remote${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️ Remote branch 'origin/$CURRENT_BRANCH' not found${NC}"
        echo -e "   Consider pushing: git push origin $CURRENT_BRANCH"
    fi

    echo ""
}

# Main execution
main() {
    check_gh_cli
    check_auth
    check_local_changes
    get_workflow_runs "$CURRENT_BRANCH"
    check_pr_status "$CURRENT_BRANCH"
    show_tips

    echo -e "${GREEN}✨ Status check complete!${NC}"
}

# Handle interruption gracefully
trap 'echo -e "\n${YELLOW}👋 Status check cancelled${NC}"; exit 0' INT

# Run main function
main
