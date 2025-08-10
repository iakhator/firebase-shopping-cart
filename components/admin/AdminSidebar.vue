<template>
  <aside class="admin-sidebar">
    <nav>
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: active === tab.name }"
          @click="$emit('change', tab.name)"
        >
          <span class="icon">
            <el-icon :size="22">
              <component :is="tab.icon" />
            </el-icon>
          </span>
          <span class="label">{{ tab.label }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { User, Box, Document } from '@element-plus/icons-vue'
const props = defineProps({
  active: {
    type: String,
    default: 'users'
  }
})

const tabs = [
  { name: 'users', label: 'Users', icon: User },
  { name: 'products', label: 'Products', icon: Box },
  { name: 'orders', label: 'Orders', icon: Document }
]
</script>

<style scoped>
.admin-sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #eee;
  padding: 2rem 0;
  min-height: 100vh;
  box-shadow: 2px 0 8px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.admin-sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.admin-sidebar nav ul li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0.75rem 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  color: #444;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background 0.18s, color 0.18s;
}
.admin-sidebar nav ul li.active,
.admin-sidebar nav ul li:hover {
  background: #f5f7fa;
  color: #222;
}
.admin-sidebar .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-sidebar .label {
  font-weight: 500;
  font-family: 'Bricolage Grotesque', Arial, sans-serif;
}
</style>
