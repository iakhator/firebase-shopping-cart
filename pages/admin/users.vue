<script setup>
import { ref } from 'vue'
import { Edit, Delete, User, Switch } from '@element-plus/icons-vue'

definePageMeta({
    layout: 'admin',
    middleware: 'admin',
})

const showModal = ref(false)
const selectedUser = ref(null)

const users = ref([
    {
        id: 'U001',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Customer',
        status: 'active',
        joinDate: '2024-01-15',
        orders: 12,
        totalSpent: '$2,450.00',
    },
    {
        id: 'U002',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Customer',
        status: 'active',
        joinDate: '2024-01-10',
        orders: 8,
        totalSpent: '$1,200.00',
    },
    {
        id: 'U003',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Customer',
        status: 'inactive',
        joinDate: '2023-12-20',
        orders: 3,
        totalSpent: '$450.00',
    },
    {
        id: 'U004',
        name: 'Alice Brown',
        email: 'alice@example.com',
        role: 'Admin',
        status: 'active',
        joinDate: '2023-11-01',
        orders: 0,
        totalSpent: '$0.00',
    },
])

function handleDeleteUser(userId) {
    if (
        window.confirm(
            'Are you sure you want to delete this user? This action cannot be undone.',
        )
    ) {
        users.value = users.value.filter((u) => u.id !== userId)
        if (selectedUser.value && selectedUser.value.id === userId) {
            showModal.value = false
            selectedUser.value = null
        }
    }
}

function handleToggleStatus(userId, currentStatus) {
    const user = users.value.find((u) => u.id === userId)
    if (user) user.status = currentStatus === 'active' ? 'inactive' : 'active'
}

function openUserModal(user) {
    selectedUser.value = { ...user }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    selectedUser.value = null
}
</script>

<template>
    <div>
        <div class="page-header">
            <h1 class="page-title">Users Management</h1>
            <p class="page-subtitle">
                Manage customer accounts and user permissions
            </p>
        </div>

        <el-row :gutter="20" class="stats-grid">
            <el-col :xs="24" :sm="12" :md="6">
                <el-card class="stat-card">
                    <div class="stat-label">Total Users</div>
                    <div class="stat-value">2,891</div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
                <el-card class="stat-card">
                    <div class="stat-label">Active Users</div>
                    <div class="stat-value">2,456</div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
                <el-card class="stat-card">
                    <div class="stat-label">New This Month</div>
                    <div class="stat-value">234</div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
                <el-card class="stat-card">
                    <div class="stat-label">Admin Users</div>
                    <div class="stat-value">12</div>
                </el-card>
            </el-col>
        </el-row>

        <div class="data-table">
            <div class="table-header">
                <h2 class="table-title">All Users</h2>
                <div class="table-actions">
                    <el-select placeholder="All Roles" style="width: 140px">
                        <el-option label="All Roles" value="" />
                        <el-option label="Customer" value="Customer" />
                        <el-option label="Admin" value="Admin" />
                    </el-select>
                    <el-select placeholder="All Status" style="width: 140px">
                        <el-option label="All Status" value="" />
                        <el-option label="Active" value="active" />
                        <el-option label="Inactive" value="inactive" />
                    </el-select>
                    <div>
                        <el-button type="primary">Export Users</el-button>
                    </div>
                </div>
            </div>
            <el-table :data="users" style="width: 100%">
                <el-table-column prop="id" label="User ID" />
                <el-table-column prop="name" label="Name" />
                <el-table-column prop="email" label="Email" />
                <el-table-column prop="role" label="Role">
                    <template #default="{ row }">
                        <el-tag
                            :type="row.role === 'Admin' ? 'warning' : 'success'"
                        >
                            <el-icon><User /></el-icon>
                            {{ row.role }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="Status">
                    <template #default="{ row }">
                        <el-tag
                            :type="
                                row.status === 'active' ? 'success' : 'danger'
                            "
                        >
                            {{ row.status }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="joinDate" label="Join Date" />
                <el-table-column prop="orders" label="Orders" />
                <el-table-column prop="totalSpent" label="Total Spent" />
                <el-table-column label="Actions" width="180">
                    <template #default="{ row }">
                        <el-button
                            size="small"
                            circle
                            aria-label="View"
                            @click="openUserModal(row)"
                        >
                            <el-icon><Edit /></el-icon>
                        </el-button>
                        <el-button
                            size="small"
                            circle
                            aria-label="Toggle Status"
                            @click="handleToggleStatus(row.id, row.status)"
                            :type="
                                row.status === 'active' ? 'warning' : 'success'
                            "
                        >
                            <el-icon><Switch /></el-icon>
                        </el-button>
                        <el-button
                            size="small"
                            type="danger"
                            circle
                            aria-label="Delete"
                            @click="handleDeleteUser(row.id)"
                        >
                            <el-icon><Delete /></el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog
            v-model="showModal"
            :title="selectedUser ? `User Details - ${selectedUser.name}` : ''"
            width="500px"
        >
            <div v-if="selectedUser">
                <el-descriptions :column="1" border>
                    <el-descriptions-item label="User ID">{{
                        selectedUser.id
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Name">{{
                        selectedUser.name
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Email">{{
                        selectedUser.email
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Role">{{
                        selectedUser.role
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Status">{{
                        selectedUser.status
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Orders">{{
                        selectedUser.orders
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Total Spent">{{
                        selectedUser.totalSpent
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Join Date">{{
                        selectedUser.joinDate
                    }}</el-descriptions-item>
                </el-descriptions>
                <div class="form-actions" style="margin-top: 1.5rem">
                    <el-button @click="closeModal">Close</el-button>
                    <el-button type="primary">Update User</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
.table-actions {
    display: flex;
    gap: 10px;
}

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

.stats-grid {
    margin-bottom: 2.5rem;
}

.stat-card {
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba($black, 0.04);
    padding: 1.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid $text-gray-100;
    .stat-label {
        font-size: 1rem;
        color: $text-gray-600;
        margin-bottom: 0.5rem;
        font-family: $font-stack-body;
    }
    .stat-value {
        font-size: 1.5rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        margin-bottom: 0.3rem;
        font-family: $font-stack-brand;
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
        .el-button--primary {
            background: $base-color !important;
            color: $text-primary !important;
            border: none;
            font-weight: $font-weight-semibold;
        }
    }
}

:deep(.el-table) {
    background: $white;
    border-radius: 12px;
    font-family: $font-stack-body;
    th {
        color: $text-gray-600;
        font-weight: $font-weight-semibold;
        background: $off-white;
        border-bottom: 1px solid $text-gray-100;
    }
    td {
        color: $text-primary;
        border-bottom: 1px solid $text-gray-100;
        vertical-align: middle;
        background: $white;
    }

    .cell {
        line-height: 34px;
    }
}

.el-tag {
    font-weight: $font-weight-medium;
    border-radius: 12px;
    text-transform: capitalize;
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    .el-button {
        min-width: 120px;
    }
}
</style>
