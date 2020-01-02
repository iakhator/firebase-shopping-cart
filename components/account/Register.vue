<template>
  <el-form ref="registerForm" :model="registerForm" :rules="rules" class="account__register register">
    <p>Create an account</p>
    <el-form-item class="account__form lastname" prop="fullname">
      <el-input v-model="registerForm.fullname" class="account__form-input" placeholder="Fullname" />
    </el-form-item>
    <el-form-item class="account__form email" prop="email">
      <el-input v-model="registerForm.email" :class="formError ? 'account__form-input invalid' : 'account__form-input'" placeholder="Email" />
      <div v-if="formError" class="el-form-item__error">
        {{ formError }}
      </div>
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input v-model="registerForm.password" class="account__form-input" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item class="account__form confirm_password" prop="confirm_password">
      <el-input v-model="registerForm.confirm_password" class="account__form-input" placeholder="Confirm password" show-password />
    </el-form-item>

    <el-form-item class="account__form">
      <el-button class="account__form-btn" @click="register( 'registerForm')">REGISTER</el-button>
    </el-form-item>

    <el-form-item class="account__form sign-register">
      <span class="info">You have an account already?</span>
      <el-button class="account__form-btn" @click="showSignIn">SIGN IN</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  props: {
    showSignIn: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    const confirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Confirm password is required'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('Passwords doesn\'t match'))
      } else {
        callback()
      }
    }

    return {
      formError: '',
      registerForm: {
        fullname: '',
        email: '',
        password: '',
        confirm_password: ''
      },

      rules: {
        fullname: [
          { required: true, message: 'Fullname is required', trigger: 'change' }
        ],
        email: [
          { type: 'email', required: true, message: 'Email is required', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'change' },
          { min: 6, message: 'Length should be atleast 6', trigger: 'change' }
        ],
        confirm_password: [
          { validator: confirmPassword, trigger: 'change' }
        ]
      }
    }
  },

  created() {
    console.log(this.$auth, 'auth')
  },

  methods: {
    async register(formName) {
      try {
        let isValid
        this.$refs[formName].validate((valid) => {
          isValid = valid
        })
        if (isValid) {
          const user = await this.$axios.post('/api/signup', {
            email: this.registerForm.email,
            password: this.registerForm.password,
            fullname: this.registerForm.fullname
          })

          await this.$auth.setUserToken(user.data.token)

          await this.$auth.loginWith('local', {
            data: {
              email: this.registerForm.email,
              password: this.registerForm.password
            }
          })

          this.$noty.success(user.data.message, {
            timeout: 2500
          })
          this.$bus.$emit('close-account-drawer', false)
        }
      } catch (error) {
        this.formError = error.response.data.error
      }
    }
  }
}
</script>

<style lang="scss">
.invalid.account__form-input .el-input__inner {
  border-color: #F56C6C !important;
}
</style>
