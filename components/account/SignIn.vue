<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="account__signin signin"
  >
    <p>Sign into your acccount</p>
    <el-form-item class="account__form email" prop="email">
      <el-input
        v-model="ruleForm.email"
        class="account__form-input"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input
        v-model="ruleForm.password"
        class="account__form-input"
        placeholder="Password"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item class="account__form">
      <el-button
        class="account__form-btn"
        :loading="loading"
        @click="login(ruleFormRef)"
        >SIGN IN</el-button
      >
    </el-form-item>

    <el-form-item class="account__form sign-register">
      <span class="info">You don't have an account?</span>
      <el-button class="account__form-btn" @click="showRegister"
        >REGISTER</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
const { signIn, getSession, data } = useAuth()
const { $bus } = useNuxtApp()

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
  loading.value = true

  let isValid
  if (!formEl) return
  await formEl.validate((valid) => {
    isValid = valid
  })

  if (!isValid) {
    loading.value = false
    return false
  }

  try {
    const token = await signIn(
      {
        email: ruleForm.value.email,
        password: ruleForm.value.password,
      },
      { callbackUrl: '/' }
    )
    // await getSession(token)
    formEl.resetFields()
    $bus.emit('close-account-drawer', false)
  } catch (error) {
    console.error(
      error.response?.data?.message || 'An error occurred during login'
    )
  } finally {
    loading.value = false
  }
}
</script>
