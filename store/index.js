const generateArray = items => {
  const arr = []
  for (const id in items) {
    arr.push(items[id])
  }
  return arr
}

const state = () => ({
  cartItems: {
    totalQty: 0,
    cartItem: []
  },
  clientSecret: ''
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.cartItems = payload
  },

  CHECKOUT(state, payload) {
    state.clientSecret = payload.clientSecret
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
  nuxtServerInit({ commit, state, dispatch }, { req }) {
    if (req.session && req.session.cart) {
      const cart = req.session.cart
      const cartItem = generateArray(cart.items)
      commit('ADD_ITEM', {
        cartItem,
        totalQty: cart.totalQty,
        totalPrice: cart.totalPrice
      })
    }
  },

  async addToCart({ commit }, payload) {
    await this.$axios.$post(`/api/cart/${payload.itemId}`, payload)
    const { data } = await this.$axios.get('/api/cart/')
    console.log(data)
    commit('ADD_ITEM', data)
    return data
  },

  async checkOut({ commit }, payload) {
    const data = await this.$axios.$post('/api/checkout', payload)
    commit('CHECKOUT', data)
  },

  async removeFromCart({ commit }, payload) {
    await this.$axios.$delete('/api/deleteItem', payload)
    const { data } = await this.$axios.get('/api/cart/')
    commit('ADD_ITEM', data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
