<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['admin'],
})

const router = useRouter()

// RBAC check: fetch current user and check role
onMounted(async () => {
    try {
        // Replace with your actual API/session logic
        const { data, error, pending } = await useFetch('/api/admin/users')
        console.log(res, 'res')
        // if (res && res.user && res.user.role === 'admin') {
        //     isAdmin.value = true
        //     // Fetch data for tables (stubbed here)
        //     users.value = res.users || []
        //     products.value = res.products || []
        //     orders.value = res.orders || []
        // } else {
        //     isAdmin.value = false
        orders.value = data
        // isAdmin.value = true
    } catch (err) {
        // isAdmin.value = false
    }
})
</script>
