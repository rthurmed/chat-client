import jwt_decode from 'jwt-decode'
import { AuthService } from '../service/authService'
import { User } from '../models/user'

export const auth = {
  state: () => ({
    token: null
  }),
  mutations: {
    set_token (state, token) {
      state.token = token
    }
  },
  actions: {
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
            const decoded = jwt_decode(response.token)
            console.log(decoded);
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