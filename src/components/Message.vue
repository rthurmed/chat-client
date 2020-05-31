<template>
  <div :class="{ 'message-container': true, 'my-message': isThisMessageMine }">
    <div class="author">
      <template v-if="!isThisMessageMine">
        {{ message.author.name }}
      </template>
    </div>
    <div class="message">
      {{ message.text }}
    </div>
    <div class="timestamp">
      {{ message.createdAt | date }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('auth', [
      'user'
    ]),
    isThisMessageMine () {
      return this.message.author.id == this.user.id
    }
  },
  filters: {
    date: (value) => {
      return moment(value).format('HH:mm')
    }
  }
}
</script>

<style>
.message-container {
  display: inline-block;
  align-self: flex-start;
  padding: 0.5em;
  background-color: white;
  border-radius: 0.25em;
  max-width: 85%;
}
.message-container.my-message {
  align-self: flex-end;
  background-color: slateblue;
  color: white;
}
.timestamp {
  font-size: small;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
}
.message-container.my-message .timestamp{
  color: rgba(255, 255, 255, 0.6);
}
.message, .timestamp {
  margin-top: 0.2em;
}
.author {
  font-weight: bold;
}
</style>