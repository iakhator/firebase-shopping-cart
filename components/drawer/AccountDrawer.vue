<template>
  <div class="account">
    <sign-in v-if="signin" :show-register="showRegister" />
    <register v-if="signup" :show-sign-in="showSignIn" />
  </div>
</template>

<script>
import SignIn from '../account/SignIn'
import Register from '../account/Register'

export default {
  components: {
    SignIn,
    Register
  },

  data() {
    return {
      signup: false,
      signin: true
    }
  },

  methods: {
    showRegister() {
      this.signup = true
      this.signin = false
    },

    showSignIn() {
      this.signup = false
      this.signin = true
    }
  }
}
</script>

<style lang="scss">
.account__signin, .account__register {
  p{
    font-weight: 600;
    margin-bottom: 20px;
  }
}

.email, .firstname, .lastname, .password {
  margin-bottom: 10px;
}

.account__form-input .el-input__inner {
    color: #1b1a1a;
    margin-top: 5px;
    border: 1px solid #cdc9c6;
    border-radius: 0px;
}

.account__form-btn.el-button {
  border-radius: 0px;
  width: 100%;
  border: 1px solid #cdc9c6;
  margin-top: 15px;
  transition: background 0.1s ease-in;

  &:hover, &:focus {
    background: #1b1a1a;
    border-color: #1b1a1a;;
    color: #ecf5ff;
  }
}

.sign-register {
  margin-top: 50px;

  .info{
    font-weight: 600;
    font-size: 0.7rem;
  }
}

.el-input {
  margin-top: 10px;
}

.el-input.password {
  margin-bottom: 10px;
}
</style>
