<template>
  <el-form ref="registerForm" :model="registerForm" :rules="rules" class="account__register register">
    <p>Create an account</p>
    <el-form-item class="account__form firstname" prop="firstname">
      <el-input v-model="registerForm.firstname" class="account__form-input" placeholder="Firstname" />
    </el-form-item>
    <el-form-item class="account__form lastname" prop="lastname">
      <el-input v-model="registerForm.lastname" class="account__form-input" placeholder="Lastname" />
    </el-form-item>
    <el-form-item class="account__form email" prop="email">
      <el-input v-model="registerForm.email" class="account__form-input" placeholder="Email" />
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input v-model="registerForm.password" class="account__form-input" placeholder="Password" show-password />
    </el-form-item>
    <el-form-item class="account__form confirm_password" prop="confirm_password">
      <el-input v-model="registerForm.confirm_password" class="account__form-input" placeholder="Confirm password" show-password />
    </el-form-item>

    <el-form-item class="account__form">
      <el-button class="account__form-btn" @click="register('registerForm')">REGISTER</el-button>
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
    return {
      registerForm: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
      },

      rules: {
        firstname: [
          { required: true, message: 'Firstname is required', trigger: 'change' },
          { min: 3, message: 'Length should be above 3', trigger: 'blur' }
        ],
        lastname: [
          { required: true, message: 'Lastname is required', trigger: 'change' }
        ],
        email: [
          { type: 'email', required: true, message: 'Email is required', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'change' }
        ],
        confirm_password: [
          { required: true, message: 'Confirm password is required', trigger: 'change' }
        ]
      }
    }
  },

  methods: {
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
