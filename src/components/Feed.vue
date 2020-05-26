<template>
  <div id="feed" ref="feed">
    <div
      class="line"
      v-for="msg in messages"
      :key="msg.id"
    >
      <message :message="msg" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from '../components/Message'

export default {
  components: {
    Message
  },
  computed: {
    ...mapGetters([
      'messages'
    ])
  },
  watch: {
    messages: function () {
      const feed = this.$refs.feed
      setTimeout(function () {
        feed.scrollTo(0, feed.scrollHeight)
      }, 100)
    }
  },
}
</script>

<style scoped>
#feed {
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 0.5em;
  margin-bottom: 0.5em;
}
.line {
  margin-bottom: 0.5em;
}
.line:last-of-type {
  margin-bottom: 0;
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
