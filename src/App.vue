<template>
  <div id="chat">
    <div id="feed">
      <div
        class="message"
        v-for="msg in messages"
        :key="msg.id">
        {{ msg.text }}
      </div>
    </div>
    <div id="toolbar">
      <input type="text" v-model="message">
      <button @click="send">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters([
      'messages'
    ])
  },
  methods: {
    send () {
      this.$socket.emit('write', this.message)
    }
  }
}
</script>

<style scoped>
#chat {
  display: grid;
  grid-template-rows: 90vh 10vh;
}
</style>
