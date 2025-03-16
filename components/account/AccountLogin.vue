<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="account__signin signin"
    >
        <p>Sign into your acccount</p>

        <Input v-model="ruleForm.email" prop="email" placeholder="Email" />
        <Input
            v-model="ruleForm.password"
            prop="password"
            placeholder="Password"
            type="password"
        />

        <el-link role="button" class="info" @click="showRegister">
            Forgot your password?
        </el-link>

        <el-form-item class="account__form">
            <UIButton
                size="large"
                class="black"
                @click="login(ruleFormRef)"
                :loading="loading"
                label="SIGN IN"
            />
        </el-form-item>
        <p v-if="errorMessage" class="el__error">{{ errorMessage }}</p>
    </el-form>
</template>

<script setup>
const emit = defineEmits(['close-dialog'])

const authStore = useAuthStore()

defineProps({
    showRegister: {
        type: Function,
        default: () => {},
    },
})

const loading = ref(false)
const ruleFormRef = ref()
const ruleForm = ref({
    email: '',
    password: '',
})

const errorMessage = computed(() => authStore.errorMessage)

const rules = reactive({
    email: [
        {
            type: 'email',
            required: true,
            message: 'Email is required',
            trigger: 'change',
        },
    ],
    password: [
        {
            required: true,
            message: 'Password is required',
            trigger: 'change',
        },
    ],
})

async function login(formEl) {
    if (!formEl) return

    loading.value = true

    try {
        const isValid = await new Promise((resolve) => {
            formEl.validate((valid) => resolve(valid))
        })

        if (!isValid) return

        await authStore.signIn(ruleForm.value)

        formEl.resetFields()
        emit('close-dialog')
        navigateTo('/')
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss">
.info {
    margin-bottom: 0.5rem;
}
</style>
