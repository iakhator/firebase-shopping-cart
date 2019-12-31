const state = () => ({
  cartItemList: [],
  quantity: 0,
  token: null,
  messages: null
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.quantity += payload
  },

  ADD_TOKEN(state, token) {
    state.token = token
  },

  MESSAGE(state, message) {
    state.messages = message
  }
}

const getters = {
}

const actions = {
  async login({ commit, state }, userDetails) {
    const user = await this.$axios.post('/api/signup', userDetails)
    commit('ADD_TOKEN', user.data.token)
    commit('MESSAGE', user.data.message)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
