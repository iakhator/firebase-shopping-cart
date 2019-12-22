<template>
  <div class="account__register register">
    <p>Create an account</p>
    <div class="account__form firstname">
      <el-input v-model="form.firstname" class="account__form-input" placeholder="Firstname"></el-input>
    </div>
    <div class="account__form lastname">
      <el-input v-model="form.lastname" class="account__form-input" placeholder="Lastname"></el-input>
    </div>
    <div class="account__form email">
      <el-input v-model="form.email" class="account__form-input" placeholder="Email"></el-input>
    </div>
    <div class="account__form password">
      <el-input v-model="form.password" class="account__form-input" placeholder="Password" show-password></el-input>
    </div>
    <div class="account__form confirm_password">
      <el-input v-model="form.confirm_password" class="account__form-input" placeholder="Confirm password" show-password></el-input>
    </div>

    <div class="account__form">
      <el-button class="account__form-btn">REGISTER</el-button>
    </div>

    <div class="account__form sign-register">
      <span class="info">You have an account already?</span>
      <el-button class="account__form-btn" @click="showSignIn">SIGN IN</el-button>
    </div>
  </div>
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
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
      }
    }
  }
}
</script>
