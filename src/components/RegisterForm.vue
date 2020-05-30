<template>
  <form @submit="submit" autocomplete="off">
    <div class="form-item form-item-fill-width">
      <label>Name</label>
      <input
        class="field"
        type="text"
        v-model="user.name"
        required
      >
    </div>
    <div class="form-item form-item-fill-width">
      <label>Email</label>
      <input
        class="field"
        type="email"
        v-model="user.email"
        required
      >
    </div>
    <div class="form-row">
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
        <label>Confirm password</label>
        <input
          class="field"
          type="password"
          v-model="user.confirm"
          required
        >
      </div>
    </div>
    <div class="form-item">
      <button
        class="btn"
        type="submit"
      >
        Register
      </button>
      <span
        class="form-status"
      >
        {{ status }}
      </span>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        pass: '',
        confirm: ''
      },
      status: ''
    }
  },
  methods: {
    ...mapActions('auth', [
      'register'
    ]),
    submit (evt) {
      evt.preventDefault()
      if (this.user.pass !== this.user.confirm) {
        this.status = 'Passwords must match'
        return
      }
      this.register(this.user)
        .then(() => {
          this.status = 'User created! Redirecting...'
          this.$router.push({ name: 'login' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
