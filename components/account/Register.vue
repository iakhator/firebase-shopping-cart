<template>
  <el-form
    ref="registerFormRef"
    :model="registerForm"
    :rules="rules"
    class="account__register register"
  >
    <p>Create an account</p>
    <el-form-item class="account__form lastname" prop="fullname">
      <el-input
        v-model="registerForm.fullname"
        class="account__form-input"
        placeholder="Fullname"
      />
    </el-form-item>
    <el-form-item class="account__form email" prop="email">
      <el-input
        v-model="registerForm.email"
        :class="
          formError ? 'account__form-input invalid' : 'account__form-input'
        "
        placeholder="Email"
      />
      <div v-if="formError" class="el-form-item__error">
        {{ formError }}
      </div>
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input
        v-model="registerForm.password"
        class="account__form-input"
        placeholder="Password"
        show-password
      />
    </el-form-item>
    <el-form-item
      class="account__form confirm_password"
      prop="confirm_password"
    >
      <el-input
        v-model="registerForm.confirm_password"
        class="account__form-input"
        placeholder="Confirm password"
        show-password
      />
    </el-form-item>

    <el-form-item class="account__form">
      <el-button class="account__form-btn" @click="register(registerFormRef)"
        >REGISTER</el-button
      >
    </el-form-item>

    <el-form-item class="account__form sign-register">
      <span class="info">You have an account already?</span>
      <el-button class="account__form-btn" @click="showSignIn"
        >SIGN IN</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
const props = defineProps({
  showSignIn: {
    type: Function,
    default: () => {},
  },
})

const formError = ref('')
const registerFormRef = ref()
const registerForm = ref({
  fullname: '',
  email: '',
  password: '',
  confirm_password: '',
})

const confirmPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Confirm password is required'))
  } else if (value !== registerForm.value.password) {
    callback(new Error("Passwords doesn't match"))
  } else {
    callback()
  }
}

const rules = reactive({
  fullname: [
    {
      required: true,
      message: 'Fullname is required',
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
  confirm_password: [{ validator: confirmPassword, trigger: 'change' }],
})

const loading = ref(false)
const authenticated = ref(false)

async function register(formEl) {
  console.log(formEl, 'formEl')
  try {
    let isValid
    if (!formEl) return
    await formEl.validate((valid) => {
      isValid = valid
    })

    if (isValid) {
      const { data, pending } = await useFetch('/api/user/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email: registerForm.value.email,
          password: registerForm.value.password,
          fullname: registerForm.value.fullname,
        },
      })

      loading.value = pending

      console.log(data, 'data')
      if (data.value) {
        const token = useCookie('token')
        token.value = data?.value?.token
        authenticated.value = true
      }

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
      //   TODO: this.$bus.emit('close-account-drawer', false)
    }
  } catch (error) {
    formError.value = error.response?.data?.error || 'Something happened'
  }
}
</script>

<style lang="scss">
.invalid.account__form-input .el-input__inner {
  border-color: #f56c6c !important;
}
</style>
