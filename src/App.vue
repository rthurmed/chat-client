<template>
  <div id="base">
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  created () {
    this.$store.dispatch('auth/checkForAuth')
  }
}
</script>

<style scoped>
#base {
  display: grid;
  grid-template-rows: 4em calc(100vh - 4em);
}
</style>
