<template>
    <el-row class="product__grid product">
        <el-col>
            <el-row>
                <el-col :md="10">
                    <div>
                        <img
                            :src="item.imageUrl"
                            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                        />
                    </div>
                </el-col>
                <el-col :md="8" class="item__contents">
                    <div class="item__contents-head">
                        <h3 class="capitalize item__contents-name">
                            {{ item.name }}
                        </h3>
                        <span class="item__contents-quantity-price">{{
                            toUSD(itemPrice)
                        }}</span>
                        <p class="item__contents-description">
                            {{ item.description }}
                        </p>
                    </div>
                    <div class="variant">
                        <el-col class="item__contents-variant">
                            <div
                                v-if="item && item.bundles?.length > 0"
                                class="item__contents-bundle"
                            >
                                <p class="item__contents-spec-variant">
                                    <span>Bundles </span>: 16GB/256GB
                                </p>

                                <UIButton
                                    :class="{
                                        'is-active': itemBundle.id === item.id,
                                    }"
                                    v-for="item in item.bundles"
                                    @click="handleBundleChange(item)"
                                    :key="item.id"
                                    :label="`${item.ram}/${item.storage}`"
                                    variant="transparent"
                                    size="large"
                                />
                            </div>
                            <div class="item__contents-variants">
                                <p class="item__contents-spec-variant">
                                    <span>Color</span>:
                                    {{ capitalize(selectedColor) }}
                                </p>
                                <UIColorBox
                                    :variants="item.variant"
                                    :activeVariant="selectedColor"
                                    @update:activeVariant="
                                        selectedColor = $event
                                    "
                                />
                                <p
                                    class="error el-tag--danger"
                                    v-if="errorMessage"
                                >
                                    {{ errorMessage }}
                                </p>
                            </div>
                        </el-col>
                    </div>
                    <div class="action-qty">
                        <UICounter v-model="qty" />
                        <UIButton
                            size="large"
                            class="black"
                            @click="updateCart"
                            label="Add to cart"
                        />
                    </div>
                </el-col>
                <el-col :md="6">
                    Shipped to you by <strong>Monaco</strong>
                </el-col>
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

const cartStore = useCartStore()
const productStore = useProductStore()

const route = useRoute()
const { toUSD } = useCurrency()

const itemBundle = ref({})
const selectedColor = ref('')
const qty = ref(1)

let errorMessage = ref('')
const loading = ref(true)

const productId = route.params.itemId

const item = computed(() => productStore.product)
const itemPrice = computed(() => itemBundle.value.price * qty.value)

// get product
productStore.getProduct(productId)

onMounted(() => {
    itemBundle.value = item.value?.bundles ? item.value?.bundles[0] : {}
    selectedColor.value = item.value.variant
        ? item.value.variant[Object.keys(item.value?.variant)[0]]
        : ''
})

function handleBundleChange(item) {
    itemBundle.value = item
}

function handleQtyChange(value) {
    qty.value = value
}

async function updateCart() {
    if (!selectedColor.value) {
        errorMessage.value = 'Please select a color'
        return
    }

    const product = {
        userId: 1,
        productId: item.value.id,
        quantity: qty.value,
        name: item.value.name,
        price: itemPrice.value || item.value.price,
        variant: selectedColor.value,
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

img {
    background: inherit;
    mix-blend-mode: multiply;
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
        font-size: 1.5rem;
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
    font-weight: $font-weight-bold;
    margin-bottom: 5px;
    font-size: 0.89rem;
}

.item__contents-variant {
}

.item__contents-quantity {
    font-size: 0.89rem;
    border-bottom: solid 1px $gray;
    flex: 0 0 30%;

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
