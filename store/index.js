const state = () => ({
  cartItemList: [],
  quantity: 0,
  userId: null
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.quantity += payload
  },

  GET_USERID(state, userId) {
    state.userId = userId
  }
}

const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  getUserId(state) {
    return state.userId
  }
}

const actions = {
  async getUserId({ commit, state }) {
    const user = await this.$axios.$get('/api/user_id')
    commit('GET_USERID', user.uid)
  },

  async logOut({ commit }) {
    await this.$axios.$post('/api/logout')
    commit('GET_USERID', null)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
