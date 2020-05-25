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
