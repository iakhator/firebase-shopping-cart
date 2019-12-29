const state = () => ({
  cartItemList: [],
  quantity: 0,
  token: null,
  errors: null,
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

const actions = {
  async login({ commit, state }, userDetails) {
    try {
      const user = await this.$axios.post('/api/signup', userDetails)
      commit('ADD_TOKEN', user.data.token)
      commit('MESSAGE', user.data.message)
    } catch (error) {
      console.error(error)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
