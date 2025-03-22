<template>
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Product Image Section -->
            <div
                class="flex justify-center items-center bg-gray-50 rounded-xl p-8"
            >
                <div class="relative w-full max-w-md aspect-[3/4]">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-03-21%20at%209.13.12%20AM-4z1GG.png"
                        alt="Samsung S10 Plus"
                        class="object-contain w-full h-full"
                    />
                </div>
            </div>

            <!-- Product Info Section -->
            <div class="flex flex-col space-y-6">
                <div class="flex justify-between items-start flex-wrap">
                    <div>
                        <h1 class="text-3xl font-bold tracking-tight">
                            SAMSUNG S10 PLUS
                        </h1>
                        <div class="flex items-center mt-2">
                            <el-rate
                                v-model="rating"
                                disabled
                                show-score
                                text-color="#000000"
                            />
                            <span class="text-sm text-gray-500 ml-2"
                                >(24 reviews)</span
                            >
                        </div>
                    </div>
                    <el-tag
                        size="large"
                        effect="plain"
                        class="flex items-center gap-1 black-tag"
                    >
                        <el-icon><Van /></el-icon>
                        <span>Shipped by Monaco</span>
                    </el-tag>
                </div>

                <div class="flex items-baseline">
                    <span class="text-3xl font-bold"
                        >${{ price.toFixed(2) }}</span
                    >
                    <span class="text-sm text-gray-500 ml-2 line-through"
                        >${{ originalPrice.toFixed(2) }}</span
                    >
                </div>

                <div class="space-y-1">
                    <p class="text-gray-600">
                        Samsung S10 Plus 6.4-Inch AMOLED (8GB, 128GB ROM)
                        Android 9.0 Pie, 12MP + 12MP + 16MP Dual SIM 4G
                        Fingerprint
                    </p>
                </div>

                <div class="space-y-4 pt-4">
                    <div>
                        <h3 class="text-sm font-medium mb-3">Bundle Options</h3>
                        <el-radio-group
                            v-model="selectedBundle"
                            size="large"
                            class="bundle-options"
                        >
                            <el-radio-button
                                v-for="bundle in bundleOptions"
                                :key="bundle.id"
                                :label="bundle.id"
                            >
                                {{ bundle.name }}
                            </el-radio-button>
                        </el-radio-group>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium mb-3">
                            Color:
                            {{
                                colorOptions.find((c) => c.id === selectedColor)
                                    ?.name
                            }}
                        </h3>
                        <div class="flex space-x-3">
                            <div
                                v-for="color in colorOptions"
                                :key="color.id"
                                class="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
                                :class="{
                                    'ring-2 ring-primary ring-offset-2':
                                        selectedColor === color.id,
                                    'color-option-white': color.id === 'white',
                                }"
                                :style="{ backgroundColor: color.hex }"
                                @click="selectedColor = color.id"
                            ></div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium mb-3">Quantity</h3>
                        <el-input-number
                            v-model="quantity"
                            :min="1"
                            :max="99"
                            size="large"
                        />
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-6">
                    <el-button
                        type="primary"
                        size="large"
                        class="flex-1 black-btn"
                        @click="addToCart"
                    >
                        <el-icon class="mr-2"><ShoppingCart /></el-icon>
                        Add to Cart
                    </el-button>
                    <el-button
                        size="large"
                        class="gap-2 white-btn"
                        @click="addToWishlist"
                    >
                        <el-icon class="mr-2"><Star /></el-icon>
                        Add to Wishlist
                    </el-button>
                </div>
            </div>
        </div>

        <!-- Product Details Tabs -->
        <el-tabs type="border-card" class="w-full product-tabs">
            <el-tab-pane label="Product Details">
                <el-card class="mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">OS</span>
                                <span>Android</span>
                            </div>
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">Display</span>
                                <span
                                    >Dynamic AMOLED capacitie touchscreen
                                    HDR10+</span
                                >
                            </div>
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">CPU</span>
                                <span>Octa-core</span>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">Chipset</span>
                                <span
                                    >Exynos 9820, Qualcomm SDM855 Snapdragon
                                    855</span
                                >
                            </div>
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">Dimension</span>
                                <span>149.9 x 70.4 x 7.8mm</span>
                            </div>
                            <div class="flex justify-between py-2 border-b">
                                <span class="font-medium">Network</span>
                                <span>GSM/CDMA/HSPA/LTE</span>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="Ratings/Review">
                <el-card class="mt-4">
                    <div
                        class="flex flex-col items-center justify-center py-12"
                    >
                        <div class="flex items-center mb-4">
                            <el-rate
                                v-model="overallRating"
                                disabled
                                show-score
                                text-color="#000000"
                                score-template="{value} out of 5"
                                :max="5"
                                :size="30"
                            />
                        </div>
                        <p class="text-gray-500 mt-2">Based on 24 reviews</p>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="FAQ">
                <el-card class="mt-4">
                    <el-collapse>
                        <el-collapse-item
                            title="Is this phone unlocked?"
                            name="1"
                        >
                            <div>
                                Yes, this phone comes factory unlocked and can
                                be used with any carrier.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="What's included in the box?"
                            name="2"
                        >
                            <div>
                                The phone, charger, USB cable, earphones, and
                                quick start guide.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="Does it support wireless charging?"
                            name="3"
                        >
                            <div>
                                Yes, the Samsung S10 Plus supports wireless
                                charging.
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { ShoppingCart, Star, Van } from '@element-plus/icons-vue'

// Product data
const price = ref(400.0)
const originalPrice = ref(499.99)
const rating = ref(4)
const overallRating = ref(4)
const quantity = ref(1)
const selectedBundle = ref('8GB/128GB')
const selectedColor = ref('blue')

// Options
const colorOptions = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'gray', name: 'Gray', hex: '#808080' },
    { id: 'silver', name: 'Silver', hex: '#C0C0C0' },
]

const bundleOptions = [
    { id: '16GB/256GB', name: '16GB/256GB' },
    { id: '8GB/128GB', name: '8GB/128GB' },
    { id: '3GB/64GB', name: '3GB/64GB' },
]

// Methods
const addToCart = () => {
    ElMessage({
        message: `Added ${quantity.value} Samsung S10 Plus to cart`,
        type: 'success',
    })
}

const addToWishlist = () => {
    ElMessage({
        message: 'Added to wishlist',
        type: 'success',
    })
}
</script>

<style></style>
