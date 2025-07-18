<template>
    <el-row class="product__grid product">
        <el-col>
            <el-row>
                <el-col :md="12">
                    <div class="item-image">
                        <img
                            :src="itemImageUrl"
                            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle"
                            alt
                        />
                    </div>
                </el-col>
                <el-col :md="12" class="item__contents">
                    <div class="item__contents-head">
                        <h3 class="capitalize item__contents-name">
                            {{ item?.name }}
                        </h3>
                    </div>
                    <div class="item__contents-quantity-price">
                        <span class="item__contents-quantity-price">{{
                            toUSD(itemPrice || 0)
                        }}</span>
                    </div>
                    <div class="item__contents-description">
                        <p class="item__contents-description">
                            {{ item?.description }}
                        </p>
                    </div>
                    <div class="variant">
                        <el-col class="item__contents-variant">
                            <div
                                v-if="item && item.bundles?.length > 0"
                                class="item__contents-bundle"
                            >
                                <p class="item__contents-spec-variant">
                                    <span>Bundle Options </span>: 16GB/256GB
                                </p>

                                <div class="item__contents-bundle-options">
                                    <UIButton
                                        :class="{
                                            'is-active':
                                                itemBundle.id === item.id,
                                        }"
                                        v-for="item in item.bundles"
                                        @click="handleBundleChange(item)"
                                        :key="item.id"
                                        :label="`${item?.ram}/${item?.storage}`"
                                        variant="transparent"
                                        size="large"
                                    />
                                </div>
                            </div>
                            <div class="item__contents-variants">
                                <p class="item__contents-spec-variant">
                                    <span>Color</span>:
                                    {{ capitalize(selectedVariant.color) }}
                                </p>
                                <UIColorBox
                                    :variants="item.variant"
                                    :activeVariant="selectedVariant"
                                    @update:activeVariant="
                                        selectedVariant = $event
                                    "
                                />
                                <p
                                    class="error el-tag--danger"
                                    v-if="errorMessage"
                                >
                                    {{ errorMessage }}
                                </p>
                            </div>
                            <div class="item__contents-quantity">
                                <p class=""><span>Quantity</span>:</p>
                                <UICounter v-model="qty" />
                            </div>
                        </el-col>
                    </div>
                    <div class="action-qty">
                        <UIButton
                            size="large"
                            class="black flex-3"
                            @click="updateCart"
                            label="Add to cart"
                        >
                            <template #icon>
                                <el-icon class="mr-2"><ShoppingCart /></el-icon>
                            </template>
                        </UIButton>
                        <UIButton
                            size="large"
                            @click="addToWhishlist"
                            variant="secondary"
                            label="Add to wishlist"
                        >
                            <template #icon>
                                <el-icon class="mr-2"><Star /></el-icon>
                            </template>
                        </UIButton>
                    </div>
                </el-col>
                <!-- <el-col :md="6">
                    Shipped to you by <strong>Monaco</strong>
                </el-col> -->
            </el-row>
        </el-col>
        <el-col>
            <el-row>
                <el-col>
                    <el-tabs class="el-card-options">
                        <el-tab-pane label="Product Details">
                            <div class="item__contents-specifications">
                                <p
                                    v-for="(
                                        specification, key
                                    ) in item.specification"
                                    :key="key"
                                >
                                    <span class="item__contents-spec"
                                        >{{ key }} :</span
                                    >
                                    {{ specification }}
                                </p>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Ratings/Review"
                            >Ratings/Review</el-tab-pane
                        >
                        <el-tab-pane label="FAQ">FAQ</el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup>
import UIButton from '~/components/ui/UIButton'
import UICounter from '~/components/ui/UICounter'
import UIColorBox from '~/components/ui/UIColorBox'
import { ShoppingCart, Star, Van } from '@element-plus/icons-vue'

const cartStore = useCartStore()
const productStore = useProductStore()

const route = useRoute()
const { toUSD } = useCurrency()

const itemBundle = ref({})
const selectedVariant = ref({})
const qty = ref(1)

let errorMessage = ref('')
const loading = ref(true)

const productId = route.params.itemId

const item = computed(() => productStore.product)
const itemPrice = computed(() => itemBundle.value.price * qty.value)
const itemImageUrl = computed(() =>
    selectedVariant.value ? selectedVariant.value?.imageUrl : '',
)

// get product
productStore.getProduct(productId)

onMounted(() => {
    itemBundle.value = item.value?.bundles ? item.value?.bundles[0] : {}
    selectedVariant.value = item.value.variant ? item.value?.variant[0] : {}
})

function handleBundleChange(item) {
    itemBundle.value = item
}

function handleQtyChange(value) {
    qty.value = value
}

function addToWhishlist() {
    // wishlistStore.addToWishlist(item.value.id)
    console.log('Added to wishlist')
}

async function updateCart() {
    if (!selectedVariant.value) {
        errorMessage.value = 'Please select a color'
        return
    }

    const product = {
        productId: item.value.id,
        quantity: qty.value,
        originalPrice: itemBundle.value?.price,
        name: item.value?.name,
        price: itemPrice.value || item.value.price,
        variant: selectedVariant.value,
        bundle: `${itemBundle.value.ram}/${itemBundle.value.storage}`,
        imageUrl: item.value.imageUrl || '',
    }

    cartStore.addToCart(product)
}

function buyNow() {}
</script>

<style scoped lang="scss">
// variables
$font-weight-bold: 600;
$off-black: #1b1a1a;
$gray: #dcdfe6;

@mixin pseudo-border($border-color) {
    content: '';
    width: 100%;
    border-bottom: solid 1px $border-color;
    position: absolute;
    left: 0;
    top: 120%;
    z-index: 99;
}

.item-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    background: inherit;
    mix-blend-mode: multiply;
    height: 75%;
    width: 75%;
}

:deep(.el-tabs__nav) {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}

.item__contents {
    padding: 2px 35px;

    h3 {
        font-weight: $font-weight-bold;
        font-size: 1.875rem;
    }

    &-description {
        margin-top: 1.5rem;
        color: $text-gray-600;
    }

    &-specifications {
        margin-top: 20px;
        position: relative;
        font-size: 0.89rem;

        &:after {
            content: '';
            width: 100%;
            border-bottom: solid 1px $gray;
            position: absolute;
            left: 0;
            top: 107%;
            z-index: 99;
        }

        p {
            margin-bottom: 4px;
        }

        .item__contents-spec {
            font-weight: $font-weight-bold;
        }
    }

    &-bundle {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-options {
            margin-bottom: 10px;
            display: flex;
            gap: 10px;
        }
    }

    &-quantity {
        margin-bottom: 5px;
        margin-top: 10px;

        p {
            margin-bottom: 8px;
            font-size: $text-sm;
        }

        &-price {
            display: flex;
            font-weight: 700;
            font-size: $text-2xl;
            margin-top: 10px;
        }
    }
}

.variant {
    margin: 20px 0;
    position: relative;
    border-bottom: 1px solid $gray;
    border-top: 1px solid $gray;
    padding: 20px 0;
}

.item__contents-spec-variant {
    margin-bottom: 5px;
    font-size: 0.89rem;
}

.item__contents-variant {
}

.item__contents-quantity {
    /* font-size: 0.89rem;
    flex: 0 0 30%; */

    // &:after {
    //   content: '';
    //   width: 100%;
    //   border-bottom: solid 1px $gray;
    //   position: absolute;
    //   left: 0;
    //   top: 120%;
    //   z-index: 99;
    // }

    &-price {
        display: flex;
        // font-weight: 600;
        font-size: 1.8rem;
        margin-top: 10px;
    }

    &-label {
        font-weight: 600;
    }
}

.action-qty {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

// .item__contents-quantity {
//   flex: 0 0 30%;
//   font-size: 0.89rem;
//   border-bottom: solid 1px $gray;

// }

.error {
    color: #f56c6c;
    font-size: 0.75rem;
}
</style>
