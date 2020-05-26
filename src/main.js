import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO(process.env.VUE_APP_SERVER_HOST),
  vuex: {
    store,
    actionPrefix: 'socket_',
    mutationPrefix: 'socket_'
  }
}))

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
