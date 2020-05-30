<template>
  <div class="full-centered">
    <login-form class="form" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  components: { LoginForm }
}
</script>

<style scoped>
.form {
  background-color: lightsteelblue;
  padding: 0.5em;
  border-radius: 0.5em;
}
</style>
