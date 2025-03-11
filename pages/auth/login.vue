<script setup>
import AuthWrapper from '~/components/account/AuthWrapper.vue'
import Login from '~/components/account/AccountLogin.vue'
</script>

<template>
    <AuthWrapper>
        <Login />
        <template #separator>
            You don't have an account?<nuxt-link to="/auth/register"
                >Register</nuxt-link
            >
        </template>
    </AuthWrapper>
</template>

<style lang="scss" scoped>
.auth-container {
    margin-top: 20px;
}

.auth-container__separator {
    display: flex;
    font-size: 0.75rem;

    a {
        text-decoration: underline;
        margin-left: 10px;
        font-weight: bold;
    }
}

:deep(.account__signin p, .auth-container .account__register p) {
    text-align: center;
}
</style>
