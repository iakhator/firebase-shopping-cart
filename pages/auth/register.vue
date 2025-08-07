<template>
    <el-card class="auth-card" shadow="hover">
        <!-- Logo/Icon -->
        <div class="auth-icon" role="button" @click="navigateTo('/')">
            <div class="icon-circle">
                <img src="/images/ringcart.png" />
                <IconShoppingBag :size="18" color="white" />
            </div>
        </div>

        <!-- Header -->
        <div class="auth-header">
            <h1 class="auth-title">Create Account</h1>
            <p class="auth-subtitle">
                Sign up to get started with your account
            </p>
        </div>

        <!-- Social Login Buttons -->
        <div class="social-buttons">
            <el-button
                class="social-btn google-btn"
                size="large"
                @click="signUpWithGoogle"
            >
                <el-icon :size="20" class="social-icon">
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                </el-icon>
                Google
            </el-button>
        </div>

        <!-- Divider -->
        <div class="divider">
            <span class="divider-text">OR CONTINUE WITH EMAIL</span>
        </div>

        <!-- Registration Form -->
        <el-form
            ref="registerFormRef"
            :model="registerForm"
            :rules="formRules"
            class="auth-form"
            @submit.prevent="handleSubmit"
        >
            <!-- Name Fields Row -->
            <el-row :gutter="12">
                <el-col :span="12">
                    <el-form-item prop="firstName" class="form-item">
                        <el-input
                            v-model="registerForm.firstName"
                            placeholder="First name"
                            size="large"
                            class="auth-input"
                            :prefix-icon="User"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="lastName" class="form-item">
                        <el-input
                            v-model="registerForm.lastName"
                            placeholder="Last name"
                            size="large"
                            class="auth-input"
                            :prefix-icon="User"
                        />
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- Email Input -->
            <el-form-item prop="email" class="form-item">
                <el-input
                    v-model="registerForm.email"
                    type="email"
                    placeholder="john@example.com"
                    size="large"
                    class="auth-input"
                    :prefix-icon="Message"
                />
            </el-form-item>

            <!-- Password Input -->
            <el-form-item prop="password" class="form-item">
                <el-input
                    v-model="registerForm.password"
                    type="password"
                    placeholder="Create password"
                    size="large"
                    class="auth-input"
                    :prefix-icon="Lock"
                    show-password
                />
            </el-form-item>

            <!-- Confirm Password Input -->
            <el-form-item prop="confirmPassword" class="form-item">
                <el-input
                    v-model="registerForm.confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    size="large"
                    class="auth-input"
                    :prefix-icon="Lock"
                    show-password
                />
            </el-form-item>

            <!-- Terms and Conditions -->
            <el-form-item prop="acceptTerms" class="form-item">
                <el-checkbox
                    v-model="registerForm.acceptTerms"
                    class="terms-checkbox"
                >
                    I agree to the
                    <el-link type="primary" class="terms-link">
                        Terms of Service
                    </el-link>
                    and
                    <el-link type="primary" class="terms-link">
                        Privacy Policy
                    </el-link>
                </el-checkbox>
            </el-form-item>

            <!-- Sign Up Button -->
            <el-form-item class="form-item">
                <UIButton
                    size="large"
                    class="black auth-button"
                    :loading="loading"
                    native-type="submit"
                    @click="handleSubmit"
                    label="Create Account"
                />
            </el-form-item>

            <!-- Error Message -->
            <div v-if="errorMessage" class="error-message">
                <el-alert
                    :title="errorMessage"
                    type="error"
                    :closable="false"
                    show-icon
                />
            </div>
        </el-form>

        <!-- Sign In Link -->
        <div class="auth-footer">
            <span class="footer-text">Already have an account?</span>
            <el-link
                type="primary"
                class="signin-link"
                @click="navigateToSignIn"
            >
                Sign in
            </el-link>
        </div>
    </el-card>
</template>

<script setup>
import { Message, Lock, ShoppingBag, User } from '@element-plus/icons-vue'

// Meta tags for the page
definePageMeta({
    layout: 'auth',
    middleware: 'guest',
})

// Store and composables
const authStore = useAuthStore()
const { $toast } = useNuxtApp()

// Reactive data
const registerFormRef = ref()
const loading = ref(false)

const registerForm = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
})

// Computed
const errorMessage = computed(() => authStore.errorMessage)

// Custom validator for confirm password
const validateConfirmPassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please confirm your password'))
    } else if (value !== registerForm.value.password) {
        callback(new Error('Passwords do not match'))
    } else {
        callback()
    }
}

// Form validation rules
const formRules = reactive({
    firstName: [
        {
            required: true,
            message: 'First name is required',
            trigger: 'blur',
        },
        {
            min: 2,
            message: 'First name must be at least 2 characters long',
            trigger: 'blur',
        },
    ],
    lastName: [
        {
            required: true,
            message: 'Last name is required',
            trigger: 'blur',
        },
        {
            min: 2,
            message: 'Last name must be at least 2 characters long',
            trigger: 'blur',
        },
    ],
    email: [
        {
            required: true,
            message: 'Email address is required',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: 'Please enter a valid email address',
            trigger: ['blur', 'change'],
        },
    ],
    password: [
        {
            required: true,
            message: 'Password is required',
            trigger: 'blur',
        },
        {
            min: 4,
            message: 'Password must be at least 8 characters long',
            trigger: 'blur',
        },
        // {
        //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        //   message:
        //     'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        //   trigger: 'blur',
        // },
    ],
    confirmPassword: [
        {
            required: true,
            validator: validateConfirmPassword,
            trigger: 'blur',
        },
    ],
    acceptTerms: [
        {
            type: 'boolean',
            required: true,
            message: 'You must accept the terms and conditions',
            trigger: 'change',
        },
        {
            validator: (rule, value, callback) => {
                if (!value) {
                    callback(
                        new Error('You must accept the terms and conditions'),
                    )
                } else {
                    callback()
                }
            },
            trigger: 'change',
        },
    ],
})

// Methods
const handleSubmit = async () => {
    errorMessage.value = ''
    if (!registerFormRef.value) return

    try {
        const valid = await registerFormRef.value.validate()
        if (!valid) return

        loading.value = true

        const response = await authStore.signUp({
            email: registerForm.value.email,
            password: registerForm.value.password,
            firstName: registerForm.value.firstName,
            lastName: registerForm.value.lastName,
        })

        if (!errorMessage.value && response.success) {
            registerForm.value = {}
            await navigateTo(`/verify/${response.code}`)
        }
    } catch (error) {
        console.error('Registration error:', error)
    } finally {
        loading.value = false
    }
}

const signUpWithGoogle = () => {
    // TODO: Implement Google OAuth
    $toast.info('Google sign-up coming soon!')
}

const navigateToSignIn = () => {
    navigateTo('/auth/login')
}

// Clear error message when component unmounts
onUnmounted(() => {
    authStore.errorMessage = null
})
</script>
