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

    <!-- Filter Sidebar (Desktop) -->
    <div class="sidebar-container" v-if="!isMobile">
      <div class="sidebar-content">
        <div class="flex justify-between items-center">
          <h3>Filters</h3>
        </div>
        <AppAside @filter-change="handleFilterChange" />
      </div>
    </div>

    <!-- Filter Drawer (Mobile) -->
    <el-drawer
      v-model="showMobileFilters"
      direction="ltr"
      size="80vw"
      :with-header="false"
      custom-class="mobile-filter-drawer"
    >
      <div
        class="drawer-header"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <h3 style="margin: 0" class="font-briscolade">Filters</h3>
        <el-button @click="closeMobileFilters" circle class="close-btn">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
      <AppAside @filter-change="handleFilterChange" />
    </el-drawer>

    <!-- Main Content -->
    <div class="main-content">
      <h2 class="collection-heading font-briscolade text-2xl">
        Browse our latest collection
      </h2>
      <LoadingSpinner
        v-if="isLoading"
        type="spinner"
        size="small"
        message="Loading products..."
      />
      <div v-else-if="!products?.length" class="no-products">
        <div class="no-products-container">
          <div class="no-products-icon">
            <IconBox size="70" color="#d1d5db" />
          </div>

          <div class="no-products-content">
            <h2 class="no-products-title">No products found</h2>
            <p class="no-products-subtitle">
              Try adjusting your filters to see more results.
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="product-list-header">
          <div class="product-count">
            Showing {{ products?.length }} product<span
              v-if="products && products.length !== 1"
              >s</span
            >
          </div>
          <div class="product-sort">
            <el-dropdown
              placement="bottom-end"
              @command="handleSortCommand"
              trigger="click"
            >
              <UIButton label="Sort" variant="transparent" size="large">
                <template #icon>
                  <IconSlidersHorizontal :size="16" />
                </template>
                <span class="sort-label">Sort</span>
              </UIButton>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="price-asc">
                    Price: Low to High
                    <el-icon
                      v-if="selectedSort === 'price-asc'"
                      style="margin-left: 8px"
                      ><Check
                    /></el-icon>
                  </el-dropdown-item>
                  <el-dropdown-item command="price-desc">
                    Price: High to Low
                    <el-icon
                      v-if="selectedSort === 'price-desc'"
                      style="margin-left: 8px"
                      ><Check
                    /></el-icon>
                  </el-dropdown-item>
                  <el-dropdown-item command="name-asc">
                    Name: A-Z
                    <el-icon
                      v-if="selectedSort === 'name-asc'"
                      style="margin-left: 8px"
                      ><Check
                    /></el-icon>
                  </el-dropdown-item>
                  <el-dropdown-item command="name-desc">
                    Name: Z-A
                    <el-icon
                      v-if="selectedSort === 'name-desc'"
                      style="margin-left: 8px"
                      ><Check
                    /></el-icon>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="product__grid">
          <div class="product__grid-right">
            <ul class="product__grid-w">
              <li
                v-for="item in sortedProducts"
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
                    <span>
                      {{ item?.bundles[0]?.ram }} /
                      {{ item?.bundles[0]?.storage }}
                    </span>
                    <div
                      v-if="item.averageRating || item.totalReviews"
                      class="product__grid-w__list-rating"
                    >
                      <el-rate
                        :model-value="item.averageRating"
                        disabled
                        :max="5"
                        size="large"
                        class="review-stars"
                      />
                      <span class="review-count text-xs">
                        {{ item.totalReviews }}
                        reviews
                      </span>
                    </div>

                    <div class="product__grid-w__list-price_fav">
                      <span class="product__grid-w__list-price">{{
                        toUSD(item?.bundles[0]?.price || item.price)
                      }}</span>
                      <el-button
                        text
                        circle
                        @click.prevent="addToWishlist(item)"
                        @mouseenter="isFavHovered = item.id"
                        @mouseleave="isFavHovered = ''"
                        class="favourite"
                        ><IconHeart
                          :size="24"
                          :fill="
                            favouritesStore.isFavourite(item.id)
                              ? '#000000'
                              : 'none'
                          "
                      /></el-button>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIButton from '~/components/ui/UIButton'
import LoadingSpinner from '~/components/ui/LoadingSpinner.vue'
import { Filter, Close, ArrowRight, Check } from '@element-plus/icons-vue'

const isFavHovered = ref('')
const showMobileFilters = ref(false)
const { toUSD } = useCurrency()
const { $toast } = useNuxtApp()
const router = useRouter()
const favouritesStore = useFavouriteStore()

// Detect mobile
const isMobile = ref(false)
if (import.meta.client) {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 992
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
}

const selectedSort = ref('price-asc')

const sortedProducts = computed(() => {
  if (!Array.isArray(props.products)) return []
  let sorted = [...props.products]
  switch (selectedSort.value) {
    case 'price-asc':
      sorted.sort((a, b) => {
        const priceA = a?.bundles?.[0]?.price ?? a.price ?? 0
        const priceB = b?.bundles?.[0]?.price ?? b.price ?? 0
        return priceA - priceB
      })
      break
    case 'price-desc':
      sorted.sort((a, b) => {
        const priceA = a?.bundles?.[0]?.price ?? a.price ?? 0
        const priceB = b?.bundles?.[0]?.price ?? b.price ?? 0
        return priceB - priceA
      })
      break
    case 'name-asc':
      sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
      break
    case 'name-desc':
      sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''))
      break
  }
  return sorted
})

function handleSortCommand(command) {
  selectedSort.value = command
}

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

async function addToWishlist(product) {
  const result = await favouritesStore.toggleFavourite(product.id)

  if (result.success) {
    $toast.success(result.message)
  } else {
    $toast.error(result.error)
  }
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
  if (import.meta.client && window.innerWidth <= 768) {
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
        price.label?.replace(/[^0-9\-+]/g, '')?.replace(/\+/g, '+')
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
  if (import.meta.client) {
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

// no product
.no-products {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 40px 20px;
}

.no-products-container {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.no-products-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.no-products-content {
  .no-products-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 12px 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .no-products-subtitle {
    font-size: 1rem;
    color: #6b7280;
    margin: 0 0 32px 0;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
}

.sidebar-container {
  flex-basis: 280px;
  flex-shrink: 0;

  @media (min-width: 993px) and (max-width: 1200px) {
    flex-basis: 240px;
  }

  @media (max-width: 992px) {
    display: none;
  }
}

/* Mobile filter drawer overrides */
.mobile-filter-drawer {
  padding: 0;
  background: #fff;
}

.sidebar-content {
  @media (max-width: 992px) {
    display: none;
  }
}

.mobile-filter-header {
  display: none;
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

.product__grid-w__list-rating {
  display: flex;
  align-items: center;
  margin: 8px 0 4px 0;
  font-family: 'Bricolage Grotesque', Arial, sans-serif;
  font-size: 1rem;
  gap: 8px;
  position: absolute;
  top: 0;
}

.product__grid-w__list-rating .stars {
  display: flex;
  align-items: center;
}

.product__grid-w__list-rating .review-count {
  color: #888;
  font-size: 0.95rem;
  margin-left: 4px;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.product-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  gap: 12px;
  flex-wrap: wrap;
}

.product-count {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.product-sort {
  min-width: 120px;
  display: flex;
  justify-content: flex-end;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #ddd !important;
  background: #fff !important;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 18px;
  border-radius: 12px;
  box-shadow: none;
  transition: border-color 0.2s;
}

.sort-btn:hover,
.sort-btn:focus {
  border-color: #999 !important;
  background: #f5f5f5 !important;
}

.sort-icon {
  font-size: 22px;
  margin-right: 2px;
}

.sort-label {
  font-size: 18px;
  font-weight: 600;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #ddd !important;
  background: #fff !important;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 18px;
  border-radius: 12px;
  box-shadow: none;
  transition: border-color 0.2s;
}

.sort-btn:hover,
.sort-btn:focus {
  border-color: #999 !important;
  background: #f5f5f5 !important;
}

.sort-icon {
  font-size: 22px;
  margin-right: 2px;
}

.sort-label {
  font-size: 18px;
  font-weight: 600;
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
