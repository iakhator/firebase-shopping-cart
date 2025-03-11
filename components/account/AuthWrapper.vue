<script setup></script>

<template>
    <div class="auth-container">
        <slot />

        <span class="auth-container__separator">
            <slot name="separator" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.auth-container {
    display: none;
}

@media screen and (max-width: 768px) {
    .auth-container {
        display: block;
    }
    :deep(.auth-container__separator) {
        display: flex;
        font-size: 0.75rem;

        a {
            text-decoration: underline;
            margin-left: 10px;
            font-weight: bold;
        }
    }
}

:deep(.account__signin p),
:deep(.account__register p) {
    text-align: center;
}
</style>
