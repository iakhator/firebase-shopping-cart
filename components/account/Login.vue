<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="account__signin signin"
  >
    <p>Sign into your acccount</p>
    <el-form-item class="account__form email" prop="email">
      <el-input
        v-model="ruleForm.email"
        class="account__form-input"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item class="account__form password" prop="password">
      <el-input
        v-model="ruleForm.password"
        class="account__form-input"
        placeholder="Password"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item
      class="account__form sign-register"
      style="margin-bottom: -10px"
    >
      <!-- <span class="info">Forgot your password</span> -->
      <el-link role="button" class="info" @click="showRegister">
        Forgot your password?
      </el-link>
    </el-form-item>

    <el-form-item class="account__form">
      <el-button
        class="account__form-btn"
        :loading="loading"
        @click="login(ruleFormRef)"
        >SIGN IN</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
// import { useAuthStore } from '~/stores/authStore'

// const { $bus } = useNuxtApp()
const emit = defineEmits(['close-dialog-visible'])

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

defineProps({
  showRegister: {
    type: Function,
    default: () => {},
  },
})

const loading = ref(false)
const ruleFormRef = ref()
const ruleForm = ref({
  email: '',
  password: '',
})

const rules = reactive({
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
  ],
})

async function login(formEl) {
  loading.value = true

  let isValid
  if (!formEl) return
  await formEl.validate((valid) => {
    isValid = valid
  })

  if (!isValid) {
    loading.value = false
    return false
  }

  const response = await authStore.signIn(ruleForm.value)

  if (response) {
    formEl.resetFields()
    $bus.emit('close-account-drawer', false)
    emit('close-dialog-visible', true)

    router.replace(route.path)
  }
}
</script>
