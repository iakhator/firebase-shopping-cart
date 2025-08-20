<script setup>
const appearance = reactive({
  theme: 'light',
  language: 'en',
  currency: 'usd',
  timezone: 'pst',
})
</script>

<template>
  <div class="space-y-6">
    <ElCard>
      <template #header>
        <span class="font-bold">Theme</span>
        <div class="text-gray-500 text-sm">Choose your preferred theme</div>
      </template>
      <div class="grid grid-cols-3 gap-4">
        <div
          :class="[
            'border-2 rounded-lg p-4 cursor-pointer',
            appearance.theme === 'light'
              ? 'border-blue-500'
              : 'border-gray-200',
          ]"
          @click="appearance.theme = 'light'"
        >
          <IconSun class="w-full mb-2 text-yellow-400" size="15" />
          <p class="text-sm font-medium text-center">Light</p>
        </div>
        <div
          :class="[
            'border-2 rounded-lg p-4 cursor-pointer',
            appearance.theme === 'dark' ? 'border-blue-500' : 'border-gray-200',
          ]"
          @click="appearance.theme = 'dark'"
        >
          <IconMoon class="w-full mb-2 text-gray-800" size="15" />
          <p class="text-sm font-medium text-center">Dark</p>
        </div>
        <div
          :class="[
            'border-2 rounded-lg p-4 cursor-pointer',
            appearance.theme === 'system'
              ? 'border-blue-500'
              : 'border-gray-200',
          ]"
          @click="appearance.theme = 'system'"
        >
          <IconGlobe class="w-full mb-2 text-green-500" size="15" />
          <p class="text-sm font-medium text-center">System</p>
        </div>
      </div>
    </ElCard>
    <ElCard>
      <template #header>
        <span class="font-bold">Language & Region</span>
        <div class="text-gray-500 text-sm">
          Set your language and regional preferences
        </div>
      </template>
      <div class="space-y-4">
        <ElForm label-position="top">
          <ElFormItem label="Language">
            <ElSelect v-model="appearance.language" size="large">
              <ElOption label="English" value="en" />
              <ElOption label="Español" value="es" />
              <ElOption label="Français" value="fr" />
              <ElOption label="Deutsch" value="de" />
            </ElSelect>
          </ElFormItem>
          <ElFormItem label="Currency">
            <ElSelect v-model="appearance.currency" size="large">
              <ElOption label="USD ($)" value="usd" />
              <ElOption label="EUR (€)" value="eur" />
              <ElOption label="GBP (£)" value="gbp" />
              <ElOption label="CAD ($)" value="cad" />
            </ElSelect>
          </ElFormItem>
          <ElFormItem label="Time Zone">
            <ElSelect v-model="appearance.timezone" size="large">
              <ElOption label="Pacific Standard Time" value="pst" />
              <ElOption label="Mountain Standard Time" value="mst" />
              <ElOption label="Central Standard Time" value="cst" />
              <ElOption label="Eastern Standard Time" value="est" />
            </ElSelect>
          </ElFormItem>
        </ElForm>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-select .el-select__wrapper) {
  background: $white;
}

:deep(.el-form-item--label-top .el-form-item__label) {
  font-weight: $font-weight-bold;
  color: $off-black;
}
</style>
