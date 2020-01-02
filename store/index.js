const state = () => ({
  cartItemList: [],
  quantity: 0
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.quantity += payload
  }
}

const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
