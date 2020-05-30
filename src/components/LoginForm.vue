<template>
  <form @submit="submit" autocomplete="off">
    <div class="form-item">
      <label>Email</label>
      <input
        class="field"
        type="email"
        v-model="user.email"
        required
      >
    </div>
    <div class="form-item">
      <label>Password</label>
      <input
        class="field"
        type="password"
        v-model="user.pass"
        required
      >
    </div>
    <div class="form-item">
      <button
        class="btn"
        type="submit"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    submit (evt) {
      evt.preventDefault()
      this.login(this.user)
        .then(() => {
          this.$router.push({ name: 'chat' })
        })
        .then((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
