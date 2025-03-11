<script setup>
import AuthWrapper from '~/components/account/AuthWrapper.vue'
import Register from '~/components/account/AccountRegister.vue'
</script>

<template>
    <AuthWrapper>
        <Register />
        <template #separator>
            You have an account?<nuxt-link to="/auth/login">Login</nuxt-link>
        </template>
    </AuthWrapper>
</template>
