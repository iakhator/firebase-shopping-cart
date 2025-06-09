<template>
    <div class="app-layout">
        <el-container>
            <AppHeader />
            <div class="container-wrapper">
                <AppAside @filter-change="handleFilterChange" />
                <div class="main-content">
                    <slot />
                </div>
            </div>
        </el-container>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
import AppAside from '~/components/AppAside'

const router = useRouter()

function handleFilterChange(filter) {
    console.log('Filter changed:', filter)
    const query = formatFiltersToQuery(filter)
    router.push({ path: '/', query })
}

function formatFiltersToQuery(filters) {
    const query = {}

    if (filters.brands?.length) {
        query.brands = filters.brands.join(',')
    }

    if (filters.priceRanges?.length) {
        query.priceRanges = filters.priceRanges
            .map(
                (price) =>
                    price.label
                        ?.replace(/[^0-9\-+]/g, '') // remove $, spaces
                        ?.replace(/\+/g, 'plus'), // replace '+' for URL-friendliness
            )
            .join(',')
    }

    if (filters.storage?.length) {
        query.storage = filters.storage.join(',')
    }

    return query
}
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.sidebar {
    flex-basis: 20%;
    flex-grow: 0;
    flex-shrink: 0;
}

.container-wrapper {
    width: 1600px;
    /* max-width: 1600px; */
    margin: 80px auto 30px auto;
    padding: 20px;
    display: flex;
    gap: 20px;
}

.main-content {
    flex-basis: 80%;
    flex-grow: 0;
    flex-shrink: 0;
}
</style>
