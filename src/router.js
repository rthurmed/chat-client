import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'

Vue.use(Router)

export const strictlyNotLoggedIn = (to, from, next) => {
  if (store.getters['auth/loggedIn']) {
    next({
      path: '/chat'
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: strictlyNotLoggedIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: strictlyNotLoggedIn
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/loggedIn']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router