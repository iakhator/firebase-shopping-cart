<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Login" name="login">
      <Login />
    </el-tab-pane>
    <el-tab-pane label="Register" name="register"><Register /></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Login from './Login.vue'
import Register from './Register.vue'
import { ref } from 'vue'

const activeName = ref('login')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs {
  width: 100%;
}

.account__signin,
.account__register {
  p {
    font-weight: 600;
    margin-bottom: 20px;
  }
}

// .email,
// .firstname,
// .lastname,
// .password {
//   margin-bottom: 10px;
// }

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

  &:hover,
  &:focus {
    background: #1b1a1a;
    border-color: #1b1a1a;
    color: #ecf5ff;
  }
}

.sign-register {
  .role-button {
    cursor: pointer;
  }

  .info {
    font-weight: 600;
    font-size: 0.7rem;
    margin-right: 5px;
  }
}

// .el-input {
//   // margin-top: 10px;
// }

// .el-input.password {
//   margin-bottom: 10px;
// }
</style>
