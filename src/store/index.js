import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    socket_message (state, message) {
      state.messages.push(message)
    }
  },
  getters: {
    messages: (state) => state.messages
  }
})