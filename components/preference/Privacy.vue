<script setup>
const privacy = reactive({
    profileVisible: true,
    analytics: true,
    ads: false,
})

function handleDeleteAccount() {
    ElMessageBox.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.',
        'Delete Account',
        {
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            type: 'warning',
        },
    ).then(() => {
        // Handle account deletion
    })
}

// function handleSavePrivacy() {
//     // Implement save functionality here
// }
</script>

<template>
    <div class="space-y-6">
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade">Privacy Settings</span>
                <div class="text-gray-500 text-sm">
                    Control your privacy and data sharing preferences
                </div>
            </template>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Profile Visibility</span>
                        <p class="text-sm text-gray-600">
                            Make your profile visible to other users
                        </p>
                    </div>
                    <ElSwitch v-model="privacy.profileVisible" />
                </div>
                <ElDivider />
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Data Analytics</span>
                        <p class="text-sm text-gray-600">
                            Help improve our service with usage analytics
                        </p>
                    </div>
                    <ElSwitch v-model="privacy.analytics" />
                </div>
                <ElDivider />
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Personalized Ads</span>
                        <p class="text-sm text-gray-600">
                            Show ads based on your interests
                        </p>
                    </div>
                    <ElSwitch v-model="privacy.ads" />
                </div>
            </div>
        </ElCard>
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade">Account Security</span>
                <div class="text-gray-500 text-sm">
                    Manage your account security settings
                </div>
            </template>
            <div class="space-y-4">
                <ElButton type="default" class="w-full" size="large">
                    <span><IconLock class="mr-2" size="15" /></span>
                    <span>Change Password</span>
                </ElButton>
                <ElButton type="default" class="w-full" size="large">
                    <span><IconShield class="mr-2" size="15" /></span>
                    <span>Enable Two-Factor Authentication</span>
                </ElButton>
                <ElButton type="default" class="w-full" size="large">
                    <span><IconDownload class="mr-2" size="15" /></span>
                    <span>Download Account Data</span>
                </ElButton>
                <ElButton
                    type="danger"
                    class="w-full"
                    size="large"
                    @click="handleDeleteAccount"
                >
                    <span><IconTrash2 class="mr-2" size="15" /></span>
                    <span>Delete Account</span>
                </ElButton>
            </div>
        </ElCard>
    </div>
</template>

<style lang="scss" scoped>
:deep(.el-button) {
    text-transform: capitalize;
    align-items: center;
    justify-content: flex-start;

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

:deep(.el-button + .el-button) {
    margin-left: 0;
}
</style>
