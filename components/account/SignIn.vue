<template>
  <el-form
    ref="ruleForm"
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
        @click="login('ruleForm')"
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
defineProps({
  showRegister: {
    type: Function,
    default: () => {},
  },
})

const loading = ref(false)
const ruleForm = reactive({
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

function login(formEl) {
  loading.value = true
  formEl.validate((valid) => {
    if (valid) {
      this.$auth
        .loginWith('local', {
          data: {
            email: ruleForm.email,
            password: ruleForm.password,
          },
        })
        .then(() => {
          formName.resetFields()
          bus.emit('close-account-drawer', false)
          loading.value = false
        })
        .catch((error) => {
          formName.resetFields()
          loading.value = false
          console.log(error.response.data.message)
        })
    } else {
      return false
    }
  })
}

const login = async (formEl) => {
  const { $bus } = useNuxtApp()
  const auth = useAuth() // Replace this with your authentication method
  loading.value = true

  const isValid = await new Promise((resolve) => {
    formEl.validate((valid) => resolve(valid))
  })

  if (!isValid) {
    loading.value = false
    return false
  }

  try {
    await auth.loginWith('local', {
      data: {
        email: ruleForm.email,
        password: ruleForm.password,
      },
    })

    formName.resetFields()
    $bus.emit('close-account-drawer', false)
  } catch (error) {
    formName.resetFields()
    console.error(error.response?.data?.message || 'Login failed')
  } finally {
    loading.value = false
  }
}
</script>
