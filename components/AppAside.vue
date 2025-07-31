<template>
    <div class="sidebar">
        <div class="filter-section">
            <h3 class="font-briscolade">Brand</h3>
            <div class="filter-options">
                <label
                    v-for="brand in brands"
                    :key="brand"
                    class="filter-label"
                >
                    <input
                        type="checkbox"
                        v-model="selectedBrands"
                        :value="brand"
                        @change="emitFilters"
                        class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                    {{ brand }}
                </label>
            </div>
        </div>

        <div class="filter-section">
            <h3 class="font-briscolade">Price Range</h3>
            <div class="filter-options">
                <label
                    v-for="range in priceRanges"
                    :key="range.label"
                    class="filter-label"
                >
                    <input
                        type="checkbox"
                        v-model="selectedPriceRanges"
                        :value="range"
                        @change="emitFilters"
                        class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                    {{ range.label }}
                </label>
            </div>
        </div>

        <div class="filter-section">
            <h3 class="font-briscolade">Storage</h3>
            <div class="filter-options">
                <label
                    v-for="storage in storageOptions"
                    :key="storage"
                    class="filter-label"
                >
                    <input
                        type="checkbox"
                        v-model="selectedStorage"
                        :value="storage"
                        @change="emitFilters"
                        class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                    {{ storage }}
                </label>
            </div>
        </div>

        <div class="filter-actions">
            <button @click="clearAllFilters" class="clear-filters-btn">
                Clear All Filters
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const route = useRoute()
const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']
const priceRanges = [
    { label: '$0 - $300', min: 0, max: 300 },
    { label: '$300 - $600', min: 300, max: 600 },
    { label: '$600 - $900', min: 600, max: 900 },
    { label: '$900+', min: 900, max: Infinity },
]
const storageOptions = ['64GB', '128GB', '256GB', '512GB', '1TB']

const selectedBrands = ref([])
const selectedPriceRanges = ref([])
const selectedStorage = ref([])

const emit = defineEmits(['filter-change'])

function emitFilters() {
    emit('filter-change', {
        brands: selectedBrands.value,
        priceRanges: selectedPriceRanges.value,
        storage: selectedStorage.value,
    })
}

function clearAllFilters() {
    selectedBrands.value = []
    selectedPriceRanges.value = []
    selectedStorage.value = []
    emitFilters()
}

onMounted(() => {
    selectedBrands.value = route.query.brands
        ? route.query.brands.split(',')
        : []
    selectedPriceRanges.value = route.query.priceRanges
        ? route.query.priceRanges.split(',').map((range) => {
              const [min, max] = range.split('-')
              return {
                  label: `$${min}${max ? ` - $${max}` : ''}`,
                  min: min ? parseInt(min) : 0,
                  max: max ? parseInt(max) : Infinity,
              }
          })
        : []
    selectedStorage.value = route.query.storage
        ? route.query.storage.split(',')
        : []
})

// Watch all selections for changes
watch(
    [selectedBrands, selectedPriceRanges, selectedStorage],
    () => {
        emitFilters()
    },
    { deep: true },
)
</script>

<style scoped>
.sidebar {
    @media (min-width: 769px) {
        background: transparent;
        padding: 0;
    }

    @media (max-width: 768px) {
        padding: 0;
        background: transparent;
        border-radius: 0;
    }
}

.filter-section {
    margin-bottom: 30px;

    @media (max-width: 768px) {
        margin-bottom: 25px;
    }

    &:last-of-type {
        margin-bottom: 20px;
    }
}

.filter-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
}

.filter-options {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 10px;
    }
}

.filter-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #555;
    position: relative;
    padding-left: 30px;
    min-height: 20px;
    user-select: none;
    transition: color 0.2s ease;

    @media (max-width: 768px) {
        font-size: 15px;
        padding-left: 35px;
        min-height: 24px;
    }

    &:hover {
        color: #333;
    }

    &:hover .checkmark {
        border-color: #333;
    }
}

.filter-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 18px;
    width: 18px;
    background-color: white;
    border: 2px solid #ddd;
    border-radius: 3px;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
        height: 20px;
        width: 20px;
    }
}

.filter-checkbox:checked ~ .checkmark {
    background-color: #333;
    border-color: #333;
}

.checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -60%) rotate(45deg);
}

.filter-checkbox:checked ~ .checkmark:after {
    display: block;
}

.filter-actions {
    padding-top: 10px;
    border-top: 1px solid #eee;
    margin-top: 10px;
}

.clear-filters-btn {
    width: 100%;
    padding: 10px 16px;
    background: transparent;
    border: 1px solid #ddd;
    color: #666;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
        padding: 12px 16px;
        font-size: 15px;
    }

    &:hover {
        background: #f5f5f5;
        border-color: #ccc;
        color: #333;
    }

    &:active {
        background: #eee;
    }
}
</style>
