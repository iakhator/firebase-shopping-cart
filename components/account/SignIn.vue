<template>
  <div class="account__signin signin">
    <p>Sign into your acccount</p>
    <div class="account__form email">
      <el-input v-model="form.email" class="account__form-input" placeholder="Email"></el-input>
    </div>
    <div class="account__form password">
      <el-input v-model="form.password" class="account__form-input" placeholder="Password" show-password></el-input>
    </div>

    <div class="account__form">
      <el-button class="account__form-btn">SIGN IN</el-button>
    </div>

    <div class="account__form sign-register">
      <span class="info">You don't have an account?</span>
      <el-button class="account__form-btn" @click="showRegister">REGISTER</el-button>
    </div>
  </div>
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
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
