<template>
  <div class="product-form-modal">
    <div class="product-form-backdrop" @click="close"></div>
    <div class="product-form-card">
      <h2 class="form-title">{{ isEdit ? 'Edit Product' : 'Add Product' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name</label>
          <el-input v-model="form.name" placeholder="Product name" required />
        </div>
        <div class="form-group">
          <label>Price</label>
          <el-input-number v-model="form.price" :min="0" :step="0.01" required />
        </div>
        <div class="form-group">
          <label>Stock</label>
          <el-input-number v-model="form.stock" :min="0" required />
        </div>
        <div class="form-group">
          <label>Category</label>
          <el-input v-model="form.category" placeholder="Category" required />
        </div>
        <div class="form-group">
          <label>Image URL</label>
          <el-input v-model="form.imageUrl" placeholder="Image URL" />
        </div>
        <div class="form-actions">
          <UIButton
            label="Save"
            type="submit"
            size="large"
            variant="primary"
            :loading="loading"
            class="form-btn"
          />
          <UIButton
            label="Cancel"
            size="large"
            variant="secondary"
            class="form-btn"
            @click="close"
          />
        </div>
        <div v-if="errorMessage" class="form-error">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import UIButton from '~/components/ui/UIButton.vue'

const props = defineProps({
  product: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'close'])

const isEdit = computed(() => !!props.product)
const loading = ref(false)
const errorMessage = ref('')

const form = ref({
  name: '',
  price: 0,
  stock: 0,
  category: '',
  imageUrl: ''
})

watch(
  () => props.product,
  (val) => {
    if (val) {
      form.value = {
        name: val.name || '',
        price: val.price || 0,
        stock: val.stock || 0,
        category: val.category || '',
        imageUrl: val.imageUrl || ''
      }
    } else {
      form.value = {
        name: '',
        price: 0,
        stock: 0,
        category: '',
        imageUrl: ''
      }
    }
  },
  { immediate: true }
)

function close() {
  emit('close')
}

async function submitForm() {
  errorMessage.value = ''
  loading.value = true
  try {
    // Basic validation
    if (!form.value.name || !form.value.category || form.value.price < 0 || form.value.stock < 0) {
      errorMessage.value = 'Please fill all required fields correctly.'
      loading.value = false
      return
    }
    // Emit save event with form data
    emit('save', { ...form.value })
    close()
  } catch (err) {
    errorMessage.value = 'Failed to save product.'
  }
  loading.value = false
}
</script>

<style scoped>
.product-form-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-form-backdrop {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1;
}
.product-form-card {
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.09);
  padding: 2rem 2.5rem;
  min-width: 340px;
  max-width: 95vw;
}
.form-title {
  font-family: 'Bricolage Grotesque', Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
  text-align: center;
}
.form-group {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
}
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.form-btn {
  min-width: 120px;
}
.form-error {
  color: #d32f2f;
  background: #ffeaea;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-weight: 500;
  text-align: center;
}
</style>
