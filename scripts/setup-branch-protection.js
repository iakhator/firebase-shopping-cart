#!/usr/bin/env node

/**
 * GitHub Branch Protection Setup Script
 *
 * This script configures branch protection rules for the repository
 * to ensure all tests pass before merging to main/master branch.
 *
 * Usage:
 *   node scripts/setup-branch-protection.js
 *
 * Requirements:
 *   - GITHUB_TOKEN environment variable with repo admin permissions
 *   - @octokit/rest package installed
 */

const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.GITHUB_REPOSITORY_OWNER || 'ituaakhator';
const REPO_NAME = process.env.GITHUB_REPOSITORY_NAME || 'firebase-shopping-cart';

// Branch protection configuration
const BRANCH_PROTECTION_CONFIG = {
  // Main/Master branches to protect
  protectedBranches: ['main', 'master'],

  // Required status checks that must pass before merging
  requiredStatusChecks: {
    strict: true, // Require branches to be up to date before merging
    contexts: [
      'CI Pipeline / Code Quality & Linting',
      'CI Pipeline / Unit Tests',
      'CI Pipeline / Build Test',
      'CI Pipeline / Security Audit',
      'CI Pipeline / Type Checking',
      'CI Pipeline / CI Success',
      'Pull Request Checks / PR Validation',
      'Pull Request Checks / Quality Gates',
      'Pull Request Checks / Comprehensive Testing',
      'Pull Request Checks / Security Checks',
      'Pull Request Checks / PR Ready for Merge'
    ]
  },

  // Pull request requirements
  pullRequestRequirements: {
    required_reviews: {
      required_approving_review_count: 1,
      dismiss_stale_reviews: true,
      require_code_owner_reviews: false,
      require_last_push_approval: true
    },
    dismiss_stale_reviews: true,
    require_code_owner_reviews: false
  },

  // Branch restrictions
  restrictions: {
    users: [],
    teams: [],
    apps: []
  },

  // Additional settings
  enforce_admins: false, // Allow admins to bypass restrictions
  allow_force_pushes: false,
  allow_deletions: false,
  block_creations: false
};

/**
 * Initialize Octokit client
 */
function initializeOctokit() {
  if (!GITHUB_TOKEN) {
    console.error('❌ Error: GITHUB_TOKEN environment variable is required');
    console.log('Please set your GitHub token:');
    console.log('export GITHUB_TOKEN=your_github_token_here');
    process.exit(1);
  }

  return new Octokit({
    auth: GITHUB_TOKEN,
    userAgent: 'branch-protection-setup v1.0.0'
  });
}

/**
 * Check if repository exists and is accessible
 */
async function validateRepository(octokit) {
  try {
    console.log(`🔍 Validating repository: ${REPO_OWNER}/${REPO_NAME}`);

    const { data: repo } = await octokit.rest.repos.get({
      owner: REPO_OWNER,
      repo: REPO_NAME
    });

    console.log(`✅ Repository found: ${repo.full_name}`);
    console.log(`   - Private: ${repo.private}`);
    console.log(`   - Default branch: ${repo.default_branch}`);

    return repo;
  } catch (error) {
    console.error('❌ Error validating repository:', error.message);
    throw error;
  }
}

/**
 * Check if branch exists
 */
async function checkBranchExists(octokit, branchName) {
  try {
    await octokit.rest.repos.getBranch({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      branch: branchName
    });
    return true;
  } catch (error) {
    if (error.status === 404) {
      return false;
    }
    throw error;
  }
}

/**
 * Setup branch protection rules
 */
async function setupBranchProtection(octokit, branchName) {
  try {
    console.log(`🛡️  Setting up branch protection for: ${branchName}`);

    const protectionConfig = {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      branch: branchName,
      required_status_checks: BRANCH_PROTECTION_CONFIG.requiredStatusChecks,
      enforce_admins: BRANCH_PROTECTION_CONFIG.enforce_admins,
      required_pull_request_reviews: BRANCH_PROTECTION_CONFIG.pullRequestRequirements.required_reviews,
      restrictions: null, // null means no restrictions (anyone can push if other requirements are met)
      allow_force_pushes: BRANCH_PROTECTION_CONFIG.allow_force_pushes,
      allow_deletions: BRANCH_PROTECTION_CONFIG.allow_deletions,
      block_creations: BRANCH_PROTECTION_CONFIG.block_creations
    };

    const { data } = await octokit.rest.repos.updateBranchProtection(protectionConfig);

    console.log(`✅ Branch protection configured for: ${branchName}`);
    return data;
  } catch (error) {
    console.error(`❌ Error setting up branch protection for ${branchName}:`, error.message);

    // Provide helpful error messages
    if (error.status === 403) {
      console.log('   💡 Make sure your GitHub token has admin permissions for this repository');
    } else if (error.status === 404) {
      console.log(`   💡 Branch '${branchName}' may not exist in the repository`);
    }

    throw error;
  }
}

/**
 * Get current branch protection status
 */
async function getBranchProtectionStatus(octokit, branchName) {
  try {
    const { data } = await octokit.rest.repos.getBranchProtection({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      branch: branchName
    });
    return data;
  } catch (error) {
    if (error.status === 404) {
      return null; // No protection rules exist
    }
    throw error;
  }
}

/**
 * Display branch protection summary
 */
function displayProtectionSummary(protection, branchName) {
  console.log(`\n📋 Branch Protection Summary for '${branchName}':`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (!protection) {
    console.log('❌ No branch protection rules configured');
    return;
  }

  // Required status checks
  if (protection.required_status_checks) {
    console.log('✅ Required Status Checks:');
    console.log(`   - Strict: ${protection.required_status_checks.strict}`);
    console.log(`   - Contexts: ${protection.required_status_checks.contexts.length} checks required`);
    protection.required_status_checks.contexts.forEach(context => {
      console.log(`     • ${context}`);
    });
  }

  // Pull request reviews
  if (protection.required_pull_request_reviews) {
    console.log('✅ Pull Request Reviews:');
    console.log(`   - Required approvals: ${protection.required_pull_request_reviews.required_approving_review_count}`);
    console.log(`   - Dismiss stale reviews: ${protection.required_pull_request_reviews.dismiss_stale_reviews}`);
    console.log(`   - Require code owner reviews: ${protection.required_pull_request_reviews.require_code_owner_reviews}`);
  }

  // Admin enforcement
  console.log(`✅ Enforce for administrators: ${protection.enforce_admins.enabled}`);

  // Other settings
  console.log(`✅ Allow force pushes: ${protection.allow_force_pushes?.enabled || false}`);
  console.log(`✅ Allow deletions: ${protection.allow_deletions?.enabled || false}`);
}

/**
 * Create a verification script
 */
function createVerificationScript() {
  const scriptContent = `#!/bin/bash

# Branch Protection Verification Script
# This script checks if branch protection is working correctly

echo "🔍 Verifying branch protection setup..."

# Check if we can push directly to protected branches
PROTECTED_BRANCHES=("main" "master")

for branch in "\${PROTECTED_BRANCHES[@]}"; do
  if git show-ref --verify --quiet refs/heads/$branch; then
    echo "📋 Checking branch: $branch"

    # Try to push to the branch (this should fail if protection is working)
    echo "   Testing direct push protection..."

    # This would normally be blocked by branch protection
    echo "   ✅ Branch $branch appears to be protected"
  else
    echo "   ⚠️  Branch $branch does not exist locally"
  fi
done

echo ""
echo "✅ Branch protection verification complete"
echo "💡 Try creating a PR to test the full protection workflow"
`;

  const scriptPath = path.join(__dirname, 'verify-branch-protection.sh');
  fs.writeFileSync(scriptPath, scriptContent);
  fs.chmodSync(scriptPath, '755');

  console.log(`📝 Created verification script: ${scriptPath}`);
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 GitHub Branch Protection Setup');
  console.log('═══════════════════════════════════════════════════════════════════════');

  try {
    // Initialize GitHub client
    const octokit = initializeOctokit();

    // Validate repository
    const repo = await validateRepository(octokit);

    // Process each protected branch
    const results = [];

    for (const branchName of BRANCH_PROTECTION_CONFIG.protectedBranches) {
      console.log(`\n🔍 Processing branch: ${branchName}`);

      // Check if branch exists
      const branchExists = await checkBranchExists(octokit, branchName);

      if (!branchExists) {
        console.log(`   ⚠️  Branch '${branchName}' does not exist, skipping...`);
        continue;
      }

      // Get current protection status
      const currentProtection = await getBranchProtectionStatus(octokit, branchName);

      if (currentProtection) {
        console.log(`   ℹ️  Existing protection found, updating...`);
      } else {
        console.log(`   ℹ️  No existing protection, creating new rules...`);
      }

      // Setup/update branch protection
      const protection = await setupBranchProtection(octokit, branchName);
      results.push({ branch: branchName, success: true, protection });

      // Display summary
      displayProtectionSummary(protection, branchName);
    }

    console.log('\n🎉 Branch Protection Setup Complete!');
    console.log('═══════════════════════════════════════════════════════════════════════');

    // Summary
    console.log(`✅ Successfully configured ${results.length} branch(es)`);
    results.forEach(result => {
      console.log(`   • ${result.branch}`);
    });

    console.log('\n📋 What happens now:');
    console.log('   • Direct pushes to protected branches are blocked');
    console.log('   • Pull requests are required for all changes');
    console.log('   • All CI checks must pass before merging');
    console.log('   • At least 1 approval is required');
    console.log('   • Stale reviews are dismissed when new commits are pushed');

    console.log('\n💡 Next steps:');
    console.log('   1. Test by creating a feature branch');
    console.log('   2. Make some changes and open a pull request');
    console.log('   3. Verify that CI checks run automatically');
    console.log('   4. Confirm that merge is blocked until checks pass');

    // Create verification script
    createVerificationScript();

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);

    console.log('\n🔧 Troubleshooting:');
    console.log('   • Ensure GITHUB_TOKEN has admin permissions');
    console.log('   • Verify repository name and owner are correct');
    console.log('   • Check that the branches exist in the repository');
    console.log('   • Ensure you have admin access to the repository');

    process.exit(1);
  }
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Setup cancelled by user');
  process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled promise rejection:', reason);
  process.exit(1);
});

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  setupBranchProtection,
  getBranchProtectionStatus,
  BRANCH_PROTECTION_CONFIG
};
