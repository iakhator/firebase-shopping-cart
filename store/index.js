const state = () => ({
  cartItemList: [],
  quantity: 0
})

const mutations = {
  ADD_ITEM(state, payload) {
    state.quantity += payload
  }
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
