import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from '../models/message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    meta: {
      totalDocs: 0,
      totalPages: 1,
      page: 0,
      hasNextPage: false,
      hasNewMessage: false
    }
  },
  mutations: {
    socket_message (state, message) {
      state.messages.push(message)
      state.meta.hasNewMessage = true
    },
    read_new_message (state) {
      state.meta.hasNewMessage = false
    },
    // Add messages to the start of the list 
    add_messages (state, messages) {
      state.messages.unshift(...(messages.reverse()))
    },
    set_meta (state, meta) {
      const { totalDocs, totalPages, page, hasNextPage } = meta
      state.meta.totalDocs = totalDocs
      state.meta.totalPages = totalPages
      state.meta.page = page
      state.meta.hasNextPage = hasNextPage
    }
  },
  actions: {
    load_previous_message ({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.meta.page >= state.meta.totalPages) {
          resolve([])
          return
        }
        const page = state.meta.page + 1
        Message.list({ page })
          .then((response) => {
            const messages = response.list
            commit('add_messages', messages)
            commit('set_meta', response)
            resolve(messages)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    messages: (state) => state.messages.map(m => new Message(m)),
    hasNextPage: (state) => state.meta.hasNextPage,
    hasNewMessage: (state) => state.meta.hasNewMessage
  }
})