<template>
    <div class="product-layout">
        <!-- Mobile Filter Toggle -->
        <div class="mobile-filter-toggle">
            <el-button @click="toggleMobileFilters" class="filter-btn">
                <el-icon class="filter-toggle-icon"><Filter /></el-icon>
                Filters
                <el-icon
                    class="filter-arrow-icon"
                    :class="{ rotated: showMobileFilters }"
                    ><ArrowRight
                /></el-icon>
            </el-button>
        </div>

        <!-- Filter Sidebar -->
        <div
            class="sidebar-container"
            :class="{ 'mobile-open': showMobileFilters }"
        >
            <div class="sidebar-overlay" @click="closeMobileFilters"></div>
            <div class="sidebar-content">
                <div class="flex justify-between items-center">
                    <h3>Filters</h3>
                    <div class="mobile-filter-header">
                        <el-button
                            @click="closeMobileFilters"
                            text
                            circle
                            class="close-btn"
                        >
                            <el-icon><Close /></el-icon>
                        </el-button>
                    </div>
                </div>
                <AppAside @filter-change="handleFilterChange" />
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <Spinner v-if="isLoading" />
            <div v-else-if="!products.length" class="no-products">
                No products found
            </div>
            <div v-else class="product__grid">
                <div class="product__grid-right">
                    <ul class="product__grid-w">
                        <li
                            v-for="item in products"
                            :key="item.id"
                            class="product__grid-w__list"
                        >
                            <a
                                class="_p"
                                :href="`/${item.categoryId}/${item.id}`"
                            >
                                <span class="product__grid-w__list-img">
                                    <img
                                        :src="item?.imageUrl"
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>
                                <div class="product__grid-w__list-content">
                                    <span
                                        class="product__grid-w__list-title multi-line-ellipsis"
                                        >{{ item.name }}
                                    </span>
                                    <span>
                                        {{ item?.bundles[0]?.ram }} /
                                        {{ item?.bundles[0]?.storage }}
                                    </span>

                                    <div
                                        class="product__grid-w__list-price_fav"
                                    >
                                        <span
                                            class="product__grid-w__list-price"
                                            >{{
                                                toUSD(
                                                    item?.bundles[0]?.price ||
                                                        item.price,
                                                )
                                            }}</span
                                        >
                                        <el-button
                                            text
                                            circle
                                            @click.prevent="addToWishlist"
                                            @mouseenter="isFavHovered = item.id"
                                            @mouseleave="isFavHovered = ''"
                                            class="favourite"
                                            ><IconHeart
                                                :size="24"
                                                backgroundColor="#000"
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
                                                    ><ShoppingBag
                                                /></el-icon>
                                            </template>
                                        </UIButton>
                                        <!-- <UIButton
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
                                    </UIButton> -->
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import UIButton from '~/components/ui/UIButton'
import { ShoppingBag, Filter, Close, ArrowRight } from '@element-plus/icons-vue'
import Spinner from '~/components/icons/Spinner.vue'

const isFavHovered = ref('')
const showMobileFilters = ref(false)
const { toUSD } = useCurrency()
const { $toast } = useNuxtApp()
const router = useRouter()

defineProps({
    products: {
        type: Array,
        default: () => [],
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
})

function addToWishlist() {
    console.log('wish list')
}

function handleHello() {
    // console.log('hello one', $noty)
    $toast.success('Hello')
}

function toggleMobileFilters() {
    showMobileFilters.value = !showMobileFilters.value
    if (showMobileFilters.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

function closeMobileFilters() {
    showMobileFilters.value = false
    document.body.style.overflow = ''
}

function handleFilterChange(filter) {
    const query = formatFiltersToQuery(filter)
    router.push({ path: '/', query })
    // Close mobile filters after applying filters
    if (process.client && window.innerWidth <= 768) {
        closeMobileFilters()
    }
}

function formatFiltersToQuery(filters) {
    const query = {}

    if (filters.brands?.length) {
        query.brands = filters.brands.join(',')
    }

    if (filters.priceRanges?.length) {
        query.priceRanges = filters.priceRanges
            .map((price) =>
                price.label?.replace(/[^0-9\-+]/g, '')?.replace(/\+/g, '+'),
            )
            .join(',')
    }

    if (filters.storage?.length) {
        query.storage = filters.storage.join(',')
    }

    return query
}

// Clean up on unmount
onUnmounted(() => {
    if (process.client) {
        document.body.style.overflow = ''
    }
})
</script>

<style lang="scss" scoped>
.product-layout {
    width: 100%;
    display: flex;
    gap: 20px;
    position: relative;

    @media (max-width: 992px) {
        flex-direction: column;
        gap: 0;
    }
}

.mobile-filter-toggle {
    display: none;

    @media (max-width: 992px) {
        display: block;
        margin-bottom: 20px;
    }

    .filter-btn {
        width: 100%;
        height: 44px;
        border: 1px solid #ddd;
        background: white;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;

        &:hover {
            background: #f5f5f5;
            border-color: #999;
        }

        .filter-toggle-icon {
            margin-right: 8px;
            font-size: 16px;
        }

        .filter-arrow-icon {
            transition: transform 0.3s ease;
            font-size: 14px;

            &.rotated {
                transform: rotate(90deg);
            }
        }
    }
}

.sidebar-container {
    flex-basis: 210px;
    flex-shrink: 0;

    @media (min-width: 993px) and (max-width: 1200px) {
        flex-basis: 230px;
    }

    @media (max-width: 992px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;

        &.mobile-open {
            transform: translateX(0);
        }
    }
}

/* .sidebar-overlay {
    display: none;

    @media (max-width: 992px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
} */

.sidebar-content {
    @media (max-width: 992px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 320px;
        max-width: 85vw;
        height: 100%;
        background: white;
        padding: 20px;
        overflow-y: auto;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    }
}

.mobile-filter-header {
    display: none;

    @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;

        h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }

        .close-btn {
            padding: 8px;
        }
    }
}

.main-content {
    flex: 1;
    min-width: 0;
    max-width: calc(100vw - 250px);

    @media (max-width: 992px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
}

.no-products {
    text-align: center;
    padding: 40px 20px;
    color: #666;
    font-size: 16px;
}

.product__grid {
    width: 100%;

    a {
        &:hover {
            text-decoration: none;
        }
    }

    &-right {
        width: 100%;
    }

    &-w {
        display: grid;
        grid-template-columns: repeat(auto-fill, 250px);
        gap: 20px;
        justify-content: start;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (max-width: 1400px) {
            grid-template-columns: repeat(auto-fill, 250px);
            gap: 18px;
        }

        @media (max-width: 1200px) {
            grid-template-columns: repeat(auto-fill, 250px);
            gap: 16px;
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            /* justify-content: center; */
            gap: 10px;
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            justify-content: center;
        }

        @media (max-width: 600px) {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 12px;
        }

        @media (max-width: 480px) {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
        }

        @media (max-width: 360px) {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        &__list {
            width: 250px;

            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }

    &-btn {
        display: flex;
        gap: 5px;
        margin-top: 10px;
        flex-direction: column;

        @media (max-width: 480px) {
            flex-direction: column;
            gap: 8px;
        }
    }
}

.product__grid-w__list-price_fav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-button.product__grid-w__list-favourite {
    background: $off-white;
    transition: all 0.2s ease;

    &:hover {
        background: $off-white !important;
        transform: scale(1.1);
    }

    svg {
        transition: all 0.2s ease;
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
