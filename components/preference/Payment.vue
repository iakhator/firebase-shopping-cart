<script setup>
const payment = reactive({
    cards: [
        {
            type: 'VISA',
            last4: '4242',
            expires: '12/25',
            default: true,
            color: 'blue',
        },
        {
            type: 'MC',
            last4: '8888',
            expires: '08/26',
            default: false,
            color: 'red',
        },
    ],
    billing: {
        country: 'us',
        state: 'California',
        address: '123 Main Street',
        city: 'San Francisco',
        zip: '94102',
    },
})

function handleSavePayment() {
    // Save payment logic
}
</script>

<template>
    <div class="space-y-6">
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade">Payment Methods</span>
                <div class="text-gray-500 text-sm">
                    Manage your saved payment methods
                </div>
            </template>
            <div class="space-y-4">
                <div
                    v-for="card in payment.cards"
                    :key="card.last4"
                    class="border rounded-lg p-4 flex items-center justify-between"
                >
                    <div class="flex items-center gap-3">
                        <div
                            :class="`w-12 h-8 rounded flex items-center justify-center text-white text-xs font-bold mr-2 bg-${card.color}-600`"
                        >
                            {{ card.type }}
                        </div>
                        <div>
                            <p class="font-medium">
                                •••• •••• •••• {{ card.last4 }}
                            </p>
                            <p class="text-sm text-gray-600">
                                Expires {{ card.expires }}
                            </p>
                        </div>
                    </div>
                    <ElTag v-if="card.default" type="success">Default</ElTag>
                    <ElButton v-else type="default" size="small" class="remove"
                        >Remove</ElButton
                    >
                </div>
                <ElButton
                    type="default"
                    class="w-full add-payment"
                    size="large"
                >
                    <IconCreditCard class="mr-2" size="15" />
                    Add New Payment Method
                </ElButton>
            </div>
        </ElCard>
        <ElCard>
            <template #header>
                <span class="font-bold font-briscolade">Billing Address</span>
                <div class="text-gray-500 text-sm">
                    Update your billing information
                </div>
            </template>
            <div class="space-y-4">
                <ElForm label-position="top" class="grid grid-cols-1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ElFormItem label="Country">
                            <ElSelect
                                v-model="payment.billing.country"
                                size="large"
                            >
                                <ElOption label="United States" value="us" />
                                <ElOption label="Canada" value="ca" />
                                <ElOption label="United Kingdom" value="uk" />
                            </ElSelect>
                        </ElFormItem>
                        <ElFormItem label="State">
                            <ElInput
                                v-model="payment.billing.state"
                                size="large"
                            />
                        </ElFormItem>
                    </div>
                    <ElFormItem label="Address">
                        <ElInput
                            v-model="payment.billing.address"
                            size="large"
                        />
                    </ElFormItem>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ElFormItem label="City">
                            <ElInput
                                v-model="payment.billing.city"
                                size="large"
                            />
                        </ElFormItem>
                        <ElFormItem label="ZIP Code">
                            <ElInput
                                v-model="payment.billing.zip"
                                size="large"
                            />
                        </ElFormItem>
                    </div>
                </ElForm>
            </div>
        </ElCard>
        <div class="flex justify-end">
            <ElButton
                type="primary"
                size="large"
                class="save-button"
                @click="handleSavePayment"
            >
                <IconSave class="mr-2" size="15" />
                Save Payment Info
            </ElButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep(.el-button) {
    text-transform: capitalize;
    align-items: center;
    justify-content: flex-start;

    &.save-button {
        width: fit-content;
        text-transform: uppercase;
    }

    &.add-payment {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    &.remove {
        width: fit-content;
    }

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

:deep(.el-select .el-select__wrapper) {
    background: $white;
}
</style>
