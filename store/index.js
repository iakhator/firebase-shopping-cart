const state = () => ({
  cartItems: {
    totalQty: 0
  }
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.cartItems = payload
  }

}

const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  quantity(state) {
    return state.cartItems.totalQty
  },

  cartItems(state) {
    return state.cartItems
  }
}

const actions = {
  async nuxtServerInit({ commit, state, dispatch }, { req }) {
    if (req.session && req.session.cart) {
      const { data } = await this.$axios.get('/api/cart/')
      commit('ADD_ITEM', data)
    }
  },

  async addToCart({ commit }, payload) {
    await this.$axios.$post(`/api/cart/${payload.itemId}`, payload)
    const { data } = await this.$axios.get('/api/cart/')
    commit('ADD_ITEM', data)
    return data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
