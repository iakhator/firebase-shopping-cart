<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="account__signin signin"
  >
    <p>Sign into your acccount</p>

    <Input v-model="ruleForm.email" prop="email" placeholder="Email" />
    <Input
      v-model="ruleForm.password"
      prop="password"
      placeholder="Password"
      type="password"
    />

    <!-- <span class="info">Forgot your password</span> -->
    <el-link role="button" class="info" @click="showRegister">
      Forgot your password?
    </el-link>

    <el-form-item class="account__form">
      <el-button
        class="account__form-btn"
        size="large"
        :loading="loading"
        @click="login(ruleFormRef)"
        >SIGN IN</el-button
      >
    </el-form-item>
    <p v-if="errorMessage" class="el__error">{{ errorMessage }}</p>
  </el-form>
</template>

<script setup>
// import { useAuthStore } from '~/stores/authStore'

// const { $bus } = useNuxtApp()
const emit = defineEmits(['close-dialog'])

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

const errorMessage = computed(() => authStore.errorMessage)

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

  try {
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
      emit('close-dialog')
    }
  } catch (error) {
    console.log(error.response, 'error')
  } finally {
    loading.value = false
  }
}
</script>
