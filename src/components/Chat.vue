<template>
  <div id="chat">
    <feed />
    <toolbar />    
  </div>
</template>

<script>
import Feed from '../components/Feed'
import Toolbar from '../components/Toolbar'

export default {
  components: { Feed, Toolbar }
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
