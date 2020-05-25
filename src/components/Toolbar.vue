<template>
  <form @submit="submit">
    <div id="toolbar">
      <input
        id="message-field"
        type="text" 
        v-model="message"
      >
      <button
        id="submit-button"
        type="submit"
      >
        Enviar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      this.send()
    },
    send () {
      this.$socket.emit('write', this.message)
      this.message = ''
    }
  }
}
</script>

<style scoped>
form, #toolbar {
  height: 100%;
}
/* #message-field, #submit-button */
</style>
