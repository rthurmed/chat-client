<template>
  <form @submit="submit" autocomplete="off">
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
#toolbar {
  display: grid;
  grid-template-columns: auto 3em;
}
#message-field, #submit-button {
  display: block;
  border: 0;
  border-radius: 0.25em;
  height: 100%;
}
#message-field {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 1em;
  box-sizing: border-box;
}
#submit-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: lightgray;
}
</style>
