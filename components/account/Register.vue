<template>
  <el-form
    ref="registerFormRef"
    :model="ruleForm"
    :rules="rules"
    class="account__register register"
  >
    <p>Create an account</p>
    <Input v-model="ruleForm.email" prop="email" placeholder="Email" />
    <Input
      v-model="ruleForm.firstname"
      prop="firstname"
      placeholder="FirstName"
    />
    <Input v-model="ruleForm.lastname" prop="lastname" placeholder="LastName" />
    <Input
      v-model="ruleForm.password"
      prop="password"
      placeholder="Password"
      type="password"
    />

    <div v-if="formError" class="el-form-item__error">
      {{ formError }}
    </div>

    <el-form-item class="account__form">
      <el-button
        class="account__form-btn"
        size="large"
        @click="register(registerFormRef)"
        >REGISTER</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
const { $bus } = useNuxtApp()
const authStore = useAuthStore()

const props = defineProps({
  showSignIn: {
    type: Function,
    default: () => {},
  },
})

const formError = ref('')
const registerFormRef = ref()
const ruleForm = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
})

const rules = reactive({
  firstname: [
    {
      required: true,
      message: 'FirstName is required',
      trigger: 'change',
    },
  ],
  lastname: [
    {
      required: true,
      message: 'LastName is required',
      trigger: 'change',
    },
  ],
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
    { min: 6, message: 'Length should be atleast 6', trigger: 'change' },
  ],
})

const loading = ref(false)
// const authenticated = ref(false)

async function register(formEl) {
  loading.value = true
  try {
    let isValid
    if (!formEl) return
    await formEl.validate((valid) => {
      isValid = valid
    })

    if (isValid) {
      const data = {
        email: ruleForm.value.email,
        password: ruleForm.value.password,
        firstname: ruleForm.value.fullname,
        lastname: ruleForm.value.lastname,
      }
      await authStore.register(...data)
      // const { data, pending } = await useFetch('/api/auth/register', {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: {
      //     email: ruleForm.value.email,
      //     password: ruleForm.value.password,
      //     firstname: ruleForm.value.fullname,
      //     lastname: ruleForm.value.lastname
      //   },
      // })

      // if (data.value) {
      //   const token = useCookie('token')
      //   token.value = data?.value?.token
      //   authenticated.value = true
      // }

      //   // await this.$auth.setUserToken(user.data.token)

      //   await this.$auth.loginWith('local', {
      //     data: {
      //       email: registerForm.value.email,
      //       password: registerForm.value.password,
      //     },
      //   })

      //   // this.$noty.success(user.data.message, {
      //   //   timeout: 2500
      //   // })

      $bus.emit('close-account-drawer', false)
    }
  } catch (error) {
    formError.value = error.response?.data?.error || 'Something happened'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss">
.invalid.account__form-input .el-input__inner {
  border-color: #f56c6c !important;
}
</style>
