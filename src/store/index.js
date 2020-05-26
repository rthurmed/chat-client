import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from '../models/message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    socket_message (state, message) {
      state.messages.push(message)
    },
    set_messages (state, messages) {
      state.messages = messages
    }
  },
  actions: {
    load_messages ({ commit }) {
      return new Promise((resolve, reject) => {
        Message.list()
          .then((response) => {
            const messages = response.list
            commit('set_messages', messages)
            resolve(messages)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    messages: (state) => state.messages.map(m => new Message(m))
  }
})