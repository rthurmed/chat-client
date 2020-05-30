import store from './store'

export const defaultHeaders = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})

export const authHeaders = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${store.state.auth.token}`
})