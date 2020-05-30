import Vue from 'vue'
import Router from 'vue-router'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Home from './pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

export const router = new Router({
  routes
})