<template>
    <div>
        <div class="page-header">
            <h1 class="page-title">Products Management</h1>
            <p class="page-subtitle">
                Manage your product catalog and inventory
            </p>
        </div>

        <div class="data-table">
            <div class="table-header">
                <h2 class="table-title">All Products</h2>
                <div class="table-actions">
                    <el-select
                        v-model="categoryFilter"
                        placeholder="All Categories"
                        class="form-select"
                        style="width: 180px"
                    >
                        <el-option label="All Categories" value="" />
                        <el-option label="Electronics" value="Electronics" />
                        <el-option label="Sports" value="Sports" />
                        <el-option label="Home" value="Home" />
                        <el-option label="Fashion" value="Fashion" />
                    </el-select>
                    <el-button type="primary" @click="openProductModal()"
                        >Add Product</el-button
                    >
                </div>
            </div>
            <el-table :data="filteredProducts" style="width: 100%">
                <el-table-column prop="image" label="Image" width="70">
                    <template #default="{ row }">
                        <img
                            :src="row.image || '/placeholder.svg'"
                            :alt="row.name"
                            class="product-image"
                        />
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="Product ID" />
                <el-table-column prop="name" label="Name" />
                <el-table-column prop="category" label="Category" />
                <el-table-column prop="price" label="Price" />
                <el-table-column prop="stock" label="Stock" />
                <el-table-column prop="status" label="Status">
                    <template #default="{ row }">
                        <el-tag
                            :type="
                                row.status === 'active' ? 'success' : 'danger'
                            "
                        >
                            {{ row.status.replace('_', ' ') }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="Actions" width="180">
                    <template #default="{ row }">
                        <el-button
                            size="small"
                            @click="openProductModal(row)"
                            circle
                            aria-label="Edit"
                        >
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDeleteProduct(row.id)"
                            circle
                            aria-label="Delete"
                        >
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog
            v-model="showModal"
            :title="isEditing ? 'Edit Product' : 'Add New Product'"
            width="500px"
        >
            <el-form @submit.prevent="handleSaveProduct" :model="modalProduct">
                <el-form-item label="Product Name">
                    <el-input
                        v-model="modalProduct.name"
                        placeholder="Enter product name"
                    />
                </el-form-item>
                <el-form-item label="Category">
                    <el-select
                        v-model="modalProduct.category"
                        placeholder="Select category"
                    >
                        <el-option label="Electronics" value="Electronics" />
                        <el-option label="Sports" value="Sports" />
                        <el-option label="Home" value="Home" />
                        <el-option label="Fashion" value="Fashion" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Price">
                    <el-input
                        v-model="modalProduct.price"
                        placeholder="$0.00"
                    />
                </el-form-item>
                <el-form-item label="Stock Quantity">
                    <el-input-number v-model="modalProduct.stock" :min="0" />
                </el-form-item>
                <el-form-item label="Description">
                    <el-input
                        type="textarea"
                        v-model="modalProduct.description"
                        placeholder="Enter product description"
                    />
                </el-form-item>
                <div class="form-actions">
                    <el-button @click="closeModal">Cancel</el-button>
                    <el-button type="primary" @click="handleSaveProduct">{{
                        isEditing ? 'Update Product' : 'Add Product'
                    }}</el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

definePageMeta({
    layout: 'admin',
    middleware: 'admin',
})

const showModal = ref(false)
const isEditing = ref(false)
const categoryFilter = ref('')

const products = ref([
    {
        id: 'P001',
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: '$299.99',
        stock: 45,
        status: 'active',
        image: '/placeholder.svg?height=60&width=60',
        description: '',
    },
    {
        id: 'P002',
        name: 'Smart Watch',
        category: 'Electronics',
        price: '$199.99',
        stock: 23,
        status: 'active',
        image: '/placeholder.svg?height=60&width=60',
        description: '',
    },
    {
        id: 'P003',
        name: 'Running Shoes',
        category: 'Sports',
        price: '$129.99',
        stock: 0,
        status: 'out_of_stock',
        image: '/placeholder.svg?height=60&width=60',
        description: '',
    },
    {
        id: 'P004',
        name: 'Coffee Maker',
        category: 'Home',
        price: '$89.99',
        stock: 12,
        status: 'active',
        image: '/placeholder.svg?height=60&width=60',
        description: '',
    },
])

const filteredProducts = computed(() => {
    if (!categoryFilter.value) return products.value
    return products.value.filter((p) => p.category === categoryFilter.value)
})

const modalProduct = ref({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: 0,
    status: 'active',
    image: '',
    description: '',
})

function handleDeleteProduct(productId) {
    if (window.confirm('Are you sure you want to delete this product?')) {
        products.value = products.value.filter((p) => p.id !== productId)
    }
}

function openProductModal(product = null) {
    if (product) {
        modalProduct.value = { ...product }
        isEditing.value = true
    } else {
        modalProduct.value = {
            id: '',
            name: '',
            category: '',
            price: '',
            stock: 0,
            status: 'active',
            image: '',
            description: '',
        }
        isEditing.value = false
    }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
}

function handleSaveProduct() {
    if (isEditing.value) {
        const idx = products.value.findIndex(
            (p) => p.id === modalProduct.value.id,
        )
        if (idx !== -1) {
            products.value[idx] = { ...modalProduct.value }
        }
    } else {
        // Generate a new ID for demo purposes
        modalProduct.value.id =
            'P' + (products.value.length + 1).toString().padStart(3, '0')
        products.value.push({ ...modalProduct.value })
    }
    showModal.value = false
}
</script>

<style lang="scss" scoped>
.page-header {
    margin-bottom: 2rem;
    .page-title {
        font-size: 2rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        margin-bottom: 0.3rem;
        font-family: $font-stack-brand;
    }
    .page-subtitle {
        color: $text-gray-600;
        font-size: 1rem;
        font-family: $font-stack-body;
    }
}

.data-table {
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba($black, 0.04);
    padding: 2rem 1.5rem;
    border: 1px solid $text-gray-100;
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.2rem;
        .table-title {
            font-size: 1.2rem;
            font-weight: $font-weight-bold;
            color: $text-primary;
            font-family: $font-stack-brand;
        }
        .table-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        .form-select {
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid $text-gray-100;
            background: $white;
            color: $text-primary;
            font-family: $font-stack-body;
            cursor: pointer;
            outline: none;
        }
        .el-button--primary {
            background: $base-color !important;
            color: $text-primary !important;
            border: none;
            font-weight: $font-weight-semibold;
        }
    }
    .product-image {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        object-fit: cover;
        background: $off-white;
        border: 1px solid $text-gray-100;
    }
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    .el-button {
        min-width: 120px;
    }
}

.el-dialog__header {
    .modal-title {
        font-size: 1.2rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        font-family: $font-stack-brand;
    }
}

.el-form-item__label {
    font-weight: $font-weight-semibold;
    color: $text-gray-600;
    font-size: 0.95rem;
    font-family: $font-stack-body;
}

.el-input,
.el-textarea,
.el-input-number {
    font-size: 1rem;
    font-family: $font-stack-body;
    color: $text-primary;
    background: $off-white;
}

.el-dialog {
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba($black, 0.12);
    min-width: 340px;
    max-width: 95vw;
}
</style>
