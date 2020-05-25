<template>
  <div id="feed">
    <div
      class="line"
      v-for="msg in messages"
      :key="msg.id"
    >
      <div class="message-container">
        <span class="message">
          {{ msg.text }}
        </span>
      </div>
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

<style scoped>
#feed {
  overflow-y: auto;
  padding-right: 0.5em;
  margin-bottom: 0.5em;
}
.line {
  margin-bottom: 0.5em;
}
.line:last-of-type {
  margin-bottom: 0;
}
.message-container {
  display: inline-block;
  padding: 0.5em;
  background-color: white;
  border-radius: 0.25em;
}
/* Scroll bar */
::-webkit-scrollbar
{
  width: 0.5em;
  height: 0.5em;
}
::-webkit-scrollbar-track
{
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  margin-bottom: 0.5em;
}
::-webkit-scrollbar-thumb
{
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.25em;
}
</style>
