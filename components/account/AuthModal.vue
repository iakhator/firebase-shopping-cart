<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Login" name="login">
            <Login @close-dialog="handleClose" />
        </el-tab-pane>
        <el-tab-pane label="Register" name="register"
            ><Register @close-dialog="handleClose"
        /></el-tab-pane>
    </el-tabs>
</template>

<script setup>
import Login from './AccountLogin.vue'
import Register from './AccountRegister.vue'
import { ref } from 'vue'

const activeName = ref('login')

const emit = defineEmits(['close-dialog'])

const handleClick = (tab, event) => {
    // console.log(tab.paneName)
}
const handleClose = () => {
    emit('close-dialog')
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
        margin-bottom: 20px;
    }
}

.account__form-input .el-input__inner {
    color: #1b1a1a;
    margin-top: 5px;
    border: 1px solid red !important;
    border-radius: 0px;
    height: 40px;
}

.el__error {
    color: #f46a6a;
    font-size: 12px;
}

// .sign-register {
//   .role-button {
//     cursor: pointer;
//   }

//   .info {
//     font-weight: 600;
//     font-size: 0.7rem;
//     margin-right: 5px;
//   }
// }

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
</style>
