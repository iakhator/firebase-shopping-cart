<script setup>
const shipping = reactive({
    addresses: [
        {
            label: 'Home',
            name: 'John Doe',
            address: '123 Main Street',
            city: 'San Francisco',
            zip: '94102',
            country: 'United States',
            default: true,
        },
        {
            label: 'Work',
            name: 'John Doe',
            address: '456 Business Ave',
            city: 'San Francisco',
            zip: '94105',
            country: 'United States',
            default: false,
        },
    ],
    preferences: {
        speed: 'standard',
        instructions: true,
    },
})

function handleSaveShipping() {
    // Save shipping logic
}
</script>

<template>
    <div class="space-y-6">
        <ElCard>
            <template #header>
                <span class="font-bold">Shipping Addresses</span>
                <div class="text-gray-500 text-sm">
                    Manage your shipping addresses
                </div>
            </template>
            <div class="space-y-4">
                <div
                    v-for="address in shipping.addresses"
                    :key="address.label"
                    class="border rounded-lg p-4"
                >
                    <div class="flex items-start justify-between mb-2">
                        <div>
                            <p class="font-medium">
                                {{ address.label }}
                            </p>
                            <ElTag
                                v-if="address.default"
                                type="success"
                                class="text-xs"
                                >Default</ElTag
                            >
                        </div>
                        <ElButton type="text" size="small">
                            <IconEdit class="mr-2" size="15 " />
                            Edit
                        </ElButton>
                    </div>
                    <div class="text-sm text-gray-600">
                        <p>{{ address.name }}</p>
                        <p>{{ address.address }}</p>
                        <p>
                            {{ address.city }},
                            {{ address.zip }}
                        </p>
                        <p>{{ address.country }}</p>
                    </div>
                </div>
                <ElButton type="default" class="w-full bg-transparent">
                    <IconMapPin class="mr-2" size="15" />
                    Add New Address
                </ElButton>
            </div>
        </ElCard>
        <ElCard>
            <template #header>
                <span class="font-bold">Shipping Preferences</span>
                <div class="text-gray-500 text-sm">
                    Set your default shipping options
                </div>
            </template>
            <div class="space-y-4">
                <ElFormItem label="Default Shipping Speed">
                    <ElSelect v-model="shipping.preferences.speed">
                        <ElOption
                            label="Standard (5-7 days)"
                            value="standard"
                        />
                        <ElOption label="Express (2-3 days)" value="express" />
                        <ElOption label="Overnight" value="overnight" />
                    </ElSelect>
                </ElFormItem>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-medium">Delivery Instructions</span>
                        <p class="text-sm text-gray-600">
                            Leave packages at door if not home
                        </p>
                    </div>
                    <ElSwitch v-model="shipping.preferences.instructions" />
                </div>
            </div>
        </ElCard>
        <div class="flex justify-end">
            <ElButton type="primary" @click="handleSaveShipping">
                <IconSave class="mr-2" size="15" />
                Save Shipping Info
            </ElButton>
        </div>
    </div>
</template>
