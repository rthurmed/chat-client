<template>
  <div id="feed" ref="feed">
    <div
      class="line centered"
      v-if="hasNextPage"
    >
      <span class="chat-event">
        Loading older messages...
      </span>
    </div>
    <div
      class="line centered"
      v-else
    >
      <span class="chat-event">
        Started conversation
      </span>
    </div>
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
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Message from '../components/Message'

export default {
  components: {
    Message
  },
  mounted () {
    const atTopHandler = this.loadPreviousMessagesAndKeepScrollPosition
    const atEndHandler = this.readNewMessage
    this.$refs.feed.addEventListener('scroll', function (evt) {
      const { scrollHeight, scrollTop, offsetHeight } = evt.srcElement
      // Feed top
      if (scrollTop == 0) {
        atTopHandler()
        return
      }
      // Feed end
      if (scrollTop + offsetHeight == scrollHeight) {
        atEndHandler()
        return
      }
    })
  },
  computed: {
    ...mapGetters([
      'messages',
      'hasNextPage',
      'hasNewMessage'
    ]),
  },
  methods: {
    ...mapActions({
      loadPreviousMessages: 'load_previous_message'
    }),
    ...mapMutations({
      readNewMessage: 'read_new_message'
    }),
    isFeedAtBottom () {
      const { scrollHeight , scrollTop, offsetHeight } = this.$refs.feed
      return scrollTop + offsetHeight == scrollHeight
    },
    scrollToBottom () {
      const feed = this.$refs.feed
      this.$nextTick(function () {
        feed.scrollTo(0, feed.scrollHeight)
      })
    },
    loadPreviousMessagesAndKeepScrollPosition () {
      const that = this
      return new Promise((resolve, reject) => {
        const heightBeforeLoading = that.$refs.feed.scrollHeight
        that.loadPreviousMessages()
          .then(() => {
            const heightAfterLoading = that.$refs.feed.scrollHeight
            that.$refs.feed.scrollTop = heightAfterLoading - heightBeforeLoading
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  watch: {
    messages: function () {
      if (this.hasNewMessage && this.isFeedAtBottom()) {
        this.scrollToBottom()
      }
    }
  },
}
</script>

<style scoped>
#feed {
  overflow-y: auto;
  padding-right: 0.5em;
}
.line {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
}
.line.centered {
  flex-direction: initial;
  justify-content: center;
}
.line:last-of-type {
  margin-bottom: 0;
}
.chat-event {
  border: 0;
  border-radius: 0.25em;
  background-color: lightgray;
  display: inline-block;
  font-size: small;
  padding: 0.5em;
  box-sizing: content-box;
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
}
::-webkit-scrollbar-thumb
{
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.25em;
}
</style>
