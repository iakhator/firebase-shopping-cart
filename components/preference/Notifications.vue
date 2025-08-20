<script setup>
const notifications = reactive({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    sms: false,
})

function handleSaveNotifications() {
    // Save notifications logic
}
</script>

<template>
    <div class="space-y-6">
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade"
                    >Email Notifications</span
                >
                <div class="text-gray-500 text-sm">
                    Choose what email notifications you'd like to receive
                </div>
            </template>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Order Updates</span>
                        <p class="text-sm text-gray-600">
                            Get notified about your order status
                        </p>
                    </div>
                    <ElSwitch v-model="notifications.orderUpdates" />
                </div>
                <ElDivider />
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Promotions & Deals</span>
                        <p class="text-sm text-gray-600">
                            Receive emails about sales and special offers
                        </p>
                    </div>
                    <ElSwitch v-model="notifications.promotions" />
                </div>
                <ElDivider />
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Newsletter</span>
                        <p class="text-sm text-gray-600">
                            Weekly newsletter with product updates
                        </p>
                    </div>
                    <ElSwitch v-model="notifications.newsletter" />
                </div>
            </div>
        </ElCard>
        <ElCard>
            <template #header>
                <span class="font-bold">SMS Notifications</span>
                <div class="text-gray-500 text-sm">
                    Manage your text message preferences
                </div>
            </template>
            <div>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">SMS Updates</span>
                        <p class="text-sm text-gray-600">
                            Receive important updates via SMS
                        </p>
                    </div>
                    <ElSwitch v-model="notifications.sms" />
                </div>
            </div>
        </ElCard>
        <div class="flex justify-end">
            <ElButton
                type="primary"
                size="large"
                @click="handleSaveNotifications"
            >
                <span><IconSave class="mr-2" size="15" /></span>
                <span>Save Preferences</span>
            </ElButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep(.el-button) {
    width: fit-content;

    & > span {
        display: flex;
        align-items: center;
    }
}
</style>
