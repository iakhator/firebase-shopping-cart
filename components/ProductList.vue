<template>
    <el-row class="product__grid">
        <div class="product__grid-right">
            <ul class="product__grid-w">
                <li
                    v-for="item in products"
                    :key="item.id"
                    class="product__grid-w__list"
                >
                    <a class="_p" :href="`/${item.categoryId}/${item.id}`">
                        <span class="product__grid-w__list-img">
                            <img :src="item?.imageUrl" alt="" loading="lazy" />
                        </span>
                        <div class="product__grid-w__list-content">
                            <span
                                class="product__grid-w__list-title multi-line-ellipsis"
                                >{{ item.name }}
                            </span>
                            <p>
                                {{ item?.bundles[0]?.ram }} /
                                {{ item?.bundles[0]?.storage }}
                            </p>

                            <div class="product__grid-w__list-price_fav">
                                <span class="product__grid-w__list-price">{{
                                    toUSD(item?.bundles[0]?.price || item.price)
                                }}</span>
                                <el-button
                                    text
                                    circle
                                    @click.prevent="addToWishlist"
                                    @mouseenter="isFavHovered = item.id"
                                    @mouseleave="isFavHovered = ''"
                                    class="product__grid-w__list-favourite"
                                    ><heart-icon
                                        :fill="
                                            isFavHovered === item.id
                                                ? '#000'
                                                : 'none'
                                        "
                                /></el-button>
                            </div>
                            <div class="product__grid-btn">
                                <UIButton
                                    size="large"
                                    class="black flex-3"
                                    @click.prevent="handleHello"
                                    label="Add to cart"
                                >
                                    <template #icon>
                                        <el-icon class="mr-2"
                                            ><ShoppingCart
                                        /></el-icon>
                                    </template>
                                </UIButton>
                                <UIButton
                                    size="large"
                                    @click="handleHello"
                                    variant="secondary"
                                    label="Buy Now"
                                >
                                    <template #icon>
                                        <el-icon class="mr-2"
                                            ><Wallet
                                        /></el-icon>
                                    </template>
                                </UIButton>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </el-row>
</template>

<script setup>
import UIButton from '~/components/ui/UIButton'
import { ShoppingCart, Star, Wallet } from '@element-plus/icons-vue'
import HeartIcon from '~/components/icons/HeartIcon.vue'

const isFavHovered = ref('')
const { toUSD } = useCurrency()
const { $toast } = useNuxtApp()

defineProps({
    products: {
        type: Array,
        default: () => [],
    },
})

function addToWishlist() {
    console.log('wish list')
}

function handleHello() {
    // console.log('hello one', $noty)
    $toast.success('Hello')
}
</script>

<style lang="scss" scoped>
//  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
.product__grid {
    a {
        &:hover {
            text-decoration: none;
        }
    }
    &-btn {
        display: flex;
        gap: 5px;
        margin-top: 10px;
        flex-direction: column;
    }
}
.product__grid-w__list-price_fav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-button.product__grid-w__list-favourite {
    background: $off-white;

    &:hover {
        background: $off-white !important;
    }
}

.el-col {
    border-radius: 4px;

    img {
        height: 50vw;
        margin-left: 8vw;
        cursor: pointer;
        animation: bounce 1s infinite alternate;
    }
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.deal {
    color: $white;
    margin: 0;
    font-size: 4vw;
    position: absolute;
    z-index: 99;
}

.deal-one {
    top: 30%;
    left: 30%;
}

.deal-two {
    top: 60%;
    left: 60%;
}

@keyframes bounce {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-15px);
    }
}
@-webkit-keyframes bounce {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-15px);
    }
}

:deep(.el-button + .el-button) {
    margin-left: 0;
}
</style>
