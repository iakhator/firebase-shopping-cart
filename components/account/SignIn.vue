<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="account__signin signin">
    <p>Sign into your acccount</p>
    <el-form-item class="account__form email" prop="email">
      <el-input v-model="ruleForm.email" class="account__form-input" placeholder="Email"></el-input>
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input v-model="ruleForm.password" class="account__form-input" placeholder="Password" show-password></el-input>
    </el-form-item>

    <el-form-item class="account__form">
      <el-button class="account__form-btn">SIGN IN</el-button>
    </el-form-item>

    <el-form-item class="account__form sign-register">
      <span class="info">You don't have an account?</span>
      <el-button class="account__form-btn" @click="showRegister">REGISTER</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    showRegister: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      ruleForm: {
        email: '',
        password: ''
      },

      rules: {
        email: [
          { type: 'email', required: true, message: 'Email is required', trigger: 'change' }
        ],
        password: [
          { type: 'password', required: true, message: 'Password is required', trigger: 'change' }
        ]
      }
    }
  }
}
</script>
