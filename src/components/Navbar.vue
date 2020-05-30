<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'chat' }">
          Chat
        </router-link>
      </li>
    </ul>
    <ul>
      <template v-if="loggedIn">
        <li>
          <span class="username">
            {{ user.name }}
          </span>
        </li>
        <li>
          <a href="#" @click="exit">
            Logout
          </a>
        </li>
      </template>
      <template v-else>
        <li>
          <router-link :to="{ name: 'register' }">
            Register
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }">
            Login
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'loggedIn',
      'user'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    exit () {
      this.logout()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: slateblue;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
li a, li span {
  padding: 0 1em;
  color: white;
  text-decoration: none;
  display: block;
  height: 4em;
  line-height: 4em;
}
.username {
  font-weight: bold;
}
</style>
