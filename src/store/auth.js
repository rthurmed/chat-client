import jwt_decode from 'jwt-decode'
import { AuthService } from '../service/authService'
import { User } from '../models/user'

const LOCAL_STORAGE_KEY = 'chat-token'

export const auth = {
  namespaced: true,
  state: () => ({
    token: null
  }),
  mutations: {
    set_token (state, token) {
      state.token = token
      localStorage.setItem(LOCAL_STORAGE_KEY, token)
    }
  },
  actions: {
    checkForAuth ({ commit }) {
      const token = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (token != null) {
        commit('set_token', token)
      }
    },
    register (context, { name, email, pass }) {
      return new Promise((resolve, reject) => {
        AuthService.register({ name, email, pass })
          .then(() => {
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    login ({ commit }, { email, pass }) {
      return new Promise((resolve, reject) => {
        AuthService.login({ email, pass })
          .then((response) => {
            commit('set_token', response.token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        AuthService.logout()
          .then(() => {
            commit('set_token', null)
            localStorage.removeItem(LOCAL_STORAGE_KEY)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    user: state => {
      const { payload } = jwt_decode(state.token)
      return new User(payload)
    },
    loggedIn: state => (state.token != null)
  }
}