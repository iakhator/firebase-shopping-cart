<template>
    <div class="sidebar">
        <div class="filter-section">
            <h3>Brand</h3>
            <div class="filter-options">
                <label v-for="brand in brands" :key="brand">
                    <input
                        type="checkbox"
                        v-model="selectedBrands"
                        :value="brand"
                        @change="emitFilters"
                    />
                    {{ brand }}
                </label>
            </div>
        </div>

        <div class="filter-section">
            <h3>Price Range</h3>
            <div class="filter-options">
                <label v-for="range in priceRanges" :key="range.label">
                    <input
                        type="checkbox"
                        v-model="selectedPriceRanges"
                        :value="range"
                        @change="emitFilters"
                    />
                    {{ range.label }}
                </label>
            </div>
        </div>

        <div class="filter-section">
            <h3>Storage</h3>
            <div class="filter-options">
                <label v-for="storage in storageOptions" :key="storage">
                    <input
                        type="checkbox"
                        v-model="selectedStorage"
                        :value="storage"
                        @change="emitFilters"
                    />
                    {{ storage }}
                </label>
            </div>
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

onMounted(() => {
    console.log(route.query, 'query')
    selectedBrands.value = route.query.brands
        ? route.query.brands.split(',')
        : []
    selectedPriceRanges.value = route.query.priceRanges
        ? route.query.priceRanges.split(',').map((range) => {
              const [min, max] = range.split('-')
              console.log(min, 'min max')
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
.filter-section {
    margin-bottom: 25px;
    margin-top: 10px;
}

.filter-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
}

.filter-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: #555;
}

input[type='checkbox'] {
    cursor: pointer;
    accent-color: #4f46e5;
}

input[type='checkbox']:checked {
    accent-color: black;
}
</style>
