<template>
    <div class="auth-layout">
        <div class="auth-container">
            <slot />
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Authentication - RingCart',
    meta: [
        {
            name: 'description',
            content: 'Sign in or create an account to access RingCart',
        },
    ],
})
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    background: $off-white;
    border: 1px solid $bg-gray-300;
}
.auth-layout {
    min-height: 100vh;
    width: 100%;
    background: $off-white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.auth-container {
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 560px) {
        max-width: 370px;
    }
}

// Reset any global styles that might interfere
:deep(body) {
    margin: 0;
    padding: 0;
}
</style>

<style lang="scss">
.el-checkbox:last-of-type {
    text-wrap: auto !important;
}
.auth-card {
    width: 100%;
    border-radius: 16px;
    border: none;
    padding: 40px 32px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

    .el-card__body {
        padding: 0;
    }
}

.auth-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;

    .icon-circle {
        position: relative;
        width: 64px;
        height: 64px;
        background-color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 40px;
            height: 40px;
            margin-left: -10px;
        }

        svg {
            position: absolute;
            top: 32px;
            right: 8px;
        }
    }
}

.auth-header {
    text-align: center;
    margin-bottom: 32px;

    .auth-title {
        font-size: 28px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 8px 0;
        line-height: 1.2;
    }

    .auth-subtitle {
        font-size: 16px;
        color: #666;
        margin: 0;
        line-height: 1.4;
    }
}

.social-buttons {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;

    .social-btn {
        flex: 1;
        height: 48px;
        border: 1px solid #e0e0e0;
        background: white;
        color: #333;
        font-weight: 500;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
            border-color: #d0d0d0;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
            margin-right: 8px;
        }
    }
}

.divider {
    position: relative;
    text-align: center;
    margin: 24px 0;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: #e0e0e0;
    }

    .divider-text {
        color: #999;
        font-size: 12px;
        font-weight: 500;
        padding: 0 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
}

.auth-form {
    .auth-input {
        .el-input__inner {
            height: 48px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        .el-input__prefix {
            color: #999;
        }
    }
}

.auth-button {
    width: 100%;
    height: 48px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        background: #333;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
}

.error-message {
    margin-top: 16px;

    .el-alert {
        border-radius: 8px;
    }
}

.auth-footer {
    text-align: center;
    margin-top: 24px;

    .footer-text {
        color: #666;
        font-size: 14px;
        margin-right: 4px;
    }

    .signin-link,
    .signup-link {
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .remember-checkbox {
        .el-checkbox__label {
            color: #666;
            font-size: 14px;
        }
    }

    .forgot-link {
        font-size: 14px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.terms-checkbox {
    .el-checkbox__label {
        color: #666;
        font-size: 14px;
        line-height: 1.5;
    }

    .terms-link {
        font-size: 14px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

@media (max-width: 480px) {
    .auth-card {
        padding: 32px 24px;
    }

    .auth-header .auth-title {
        font-size: 24px;
    }

    .social-buttons {
        flex-direction: column;

        .social-btn {
            width: 100%;
        }
    }

    .form-options {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }

    .el-row {
        margin: 0;

        .el-col {
            padding: 0 6px;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;
            }
        }
    }
}
</style>
