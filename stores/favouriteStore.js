export const useFavouriteStore = defineStore('favourites', () => {
  const favourites = ref([])
  const favouriteIds = ref([])
  const loading = ref(false)
  const error = ref(null)

  const authStore = useAuthStore()

  const toggleFavourite = async (productId) => {
    try {
      loading.value = true
      error.value = null

      if (!authStore.user?.uid) {
        throw new Error('Please login to manage favourites')
      }

      const response = await $fetch('/api/user/favourite', {
        method: 'POST',
        body: {
          productId,
          userId: authStore.user.uid,
        },
      })

      if (response.success) {
        // Update local state
        if (response.action === 'added') {
          favouriteIds.value.push(productId)
        } else {
          favouriteIds.value = favouriteIds.value.filter(
            (id) => id !== productId
          )
        }

        return {
          success: true,
          message: response.message,
          isFavourite: response.isFavourite,
        }
      }
    } catch (err) {
      error.value =
        err.data?.message || err.message || 'Failed to toggle favourite'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const getFavourites = async () => {
    try {
      loading.value = true
      error.value = null

      if (!authStore.user?.uid) {
        return { success: false, error: 'Please login to view favourites' }
      }

      const token = await authStore.getIdToken()

      const response = await $fetch(`/api/favourites/${authStore.user.uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.success) {
        favourites.value = response.data.favourites
        favouriteIds.value = response.data.favourites.map((f) => f.id)

        return {
          success: true,
          data: response.data.favourites,
          count: response.data.count,
        }
      }
    } catch (err) {
      error.value =
        err.data?.message || err.message || 'Failed to fetch favourites'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const isFavourite = (productId) => {
    return favouriteIds.value.includes(productId)
  }

  const clearFavourites = () => {
    favourites.value = []
    favouriteIds.value = []
    error.value = null
  }

  return {
    favourites: favourites,
    favouriteIds: favouriteIds,
    loading: loading,
    error: error,
    toggleFavourite,
    getFavourites,
    isFavourite,
    clearFavourites,
  }
})
