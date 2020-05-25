<template>
  <div id="feed">
    <div
      class="message"
      v-for="msg in messages"
      :key="msg.id">
      {{ msg.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'messages'
    ])
  },
}
</script>
