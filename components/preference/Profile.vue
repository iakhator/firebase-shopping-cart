<script setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const profile = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    avatar: '/placeholder.svg?height=96&width=96',
})

onMounted(() => {
    profile.firstName = authStore.user.firstName
    profile.lastName = authStore.user.lastName
    profile.email = authStore.user.email
    profile.phone = authStore.user.phone
    profile.bio = authStore.user.bio
    // profile.avatar = authStore.user.avatar
})

function handleSaveProfile() {
    console.log('save profile')
}
</script>
<template>
    <div class="space-y-6">
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade text-base"
                    >Profile Information</span
                >
                <div class="text-gray-500 text-sm">
                    Update your personal information and profile picture
                </div>
            </template>
            <div class="space-y-6">
                <div class="flex items-center gap-6">
                    <div class="avatar-upload">
                        <ElAvatar :size="96" :src="profile.avatar" />
                        <ElButton
                            circle
                            size="small"
                            class="avatar-upload-button"
                        >
                            <IconCamera size="15" />
                        </ElButton>
                    </div>
                    <div>
                        <h3 class="font-semibold">Profile Picture</h3>
                        <p class="text-sm text-gray-600 mb-2">
                            JPG, GIF or PNG. 1MB max.
                        </p>
                        <ElButton type="default" size="small"
                            >Upload new picture</ElButton
                        >
                    </div>
                </div>
                <ElDivider />
                <ElForm label-position="top" class="grid grid-cols-1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ElFormItem label="First Name">
                            <ElInput v-model="profile.firstName" size="large" />
                        </ElFormItem>
                        <ElFormItem label="Last Name">
                            <ElInput v-model="profile.lastName" size="large" />
                        </ElFormItem>
                        <ElFormItem label="Email">
                            <ElInput
                                v-model="profile.email"
                                type="email"
                                size="large"
                            />
                        </ElFormItem>
                        <ElFormItem label="Phone Number">
                            <ElInput v-model="profile.phone" size="large" />
                        </ElFormItem>
                    </div>
                    <ElFormItem label="Bio">
                        <ElInput
                            v-model="profile.bio"
                            type="textarea"
                            placeholder="Tell us about yourself..."
                        />
                    </ElFormItem>
                </ElForm>
                <div class="flex justify-end">
                    <ElButton
                        type="primary"
                        size="large"
                        class="flex items-center fit-content gap-2"
                        @click="handleSaveProfile"
                    >
                        <IconSave class="mr-2" size="15" />
                        Save Changes
                    </ElButton>
                </div>
            </div>
        </ElCard>
    </div>
</template>

<style lang="scss" scoped>
.el-button {
    width: fit-content;
}

.avatar-upload {
    position: relative;
    &-button {
        position: absolute;
        bottom: 0;
        right: 5%;
        background: $black;
        color: $white;
        width: 32px;
        height: 32px;
    }
}

h3 {
    font-size: $text-base;
}
</style>
