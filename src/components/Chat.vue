<template>
  <div id="chat">
    <feed />
    <toolbar />    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Feed from '../components/Feed'
import Toolbar from '../components/Toolbar'

export default {
  components: { Feed, Toolbar },
  async created () {
    await this.loadMessages()
  },
  methods: {
    ...mapActions({
      loadMessages: 'load_previous_message'
    })
  }
}
</script>

<style scoped>
#chat {
  display: grid;
  grid-template-rows: auto 3em;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: lightsteelblue;
}
</style>
