<template>
  <div id="chat">
    <feed ref="feed" />
    <toolbar />    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Feed from '../components/Feed'
import Toolbar from '../components/Toolbar'

export default {
  components: { Feed, Toolbar },
  created () {
    this.loadMessages()
      .then(() => {
        this.$refs.feed.scrollToBottom()
      })
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
  grid-gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: lightsteelblue;
}
</style>
