<template>
  <el-form
    ref="registerFormRef"
    :model="ruleForm"
    :rules="rules"
    class="account__register register"
  >
    <p>Create an account</p>
    <Input v-model="ruleForm.email" prop="email" placeholder="Email" />
    <Input
      v-model="ruleForm.firstname"
      prop="firstname"
      placeholder="FirstName"
    />
    <Input v-model="ruleForm.lastname" prop="lastname" placeholder="LastName" />
    <Input
      v-model="ruleForm.password"
      prop="password"
      placeholder="Password"
      type="password"
    />

    <div v-if="formError" class="el-form-item__error">
      {{ formError }}
    </div>

    <el-form-item class="account__form">
      <UIButton
        size="large"
        class="black"
        :loading="loading"
        @click="register(registerFormRef)"
        label="REGISTER"
      />
    </el-form-item>
  </el-form>
</template>

<script setup>
const authStore = useAuthStore()

const emit = defineEmits(['close-dialog'])
const props = defineProps({
  showSignIn: {
    type: Function,
    default: () => {},
  },
})

const formError = ref('')
const registerFormRef = ref()
const ruleForm = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
})

const rules = reactive({
  firstname: [
    {
      required: true,
      message: 'FirstName is required',
      trigger: 'change',
    },
  ],
  lastname: [
    {
      required: true,
      message: 'LastName is required',
      trigger: 'change',
    },
  ],
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
    { min: 6, message: 'Length should be atleast 6', trigger: 'change' },
  ],
})

const loading = ref(false)
// const authenticated = ref(false)

async function register(formEl) {
  loading.value = true
  try {
    let isValid
    if (!formEl) return
    await formEl.validate((valid) => {
      isValid = valid
    })

    if (isValid) {
      const data = {
        email: ruleForm.value.email,
        password: ruleForm.value.password,
        firstName: ruleForm.value.firstname,
        lastName: ruleForm.value.lastname,
      }

      const response = await authStore.signUp(data)
      console.log(response, 'response')
      if (response) {
        formEl.resetFields()
        emit('close-dialog')
      }
    }
  } catch (error) {
    formError.value = error.response?.data?.error || 'Something happened'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss">
.invalid.account__form-input .el-input__inner {
  border-color: #f56c6c !important;
}
</style>
