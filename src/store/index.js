import { createStore } from 'vuex'

export default createStore({
  state: {
    imgparticulars: {
      lookcount: 1000
    }
  },
  mutations: {
    add (state) {
      state.imgparticulars.lookcount += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
