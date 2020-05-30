<template>
  <div class="full-centered">
    <register-form class="form" />
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'

export default {
  components: { RegisterForm }
}
</script>

<style scoped>
.form {
  background-color: lightsteelblue;
  padding: 0.5em;
  border-radius: 0.5em;
}
</style>
