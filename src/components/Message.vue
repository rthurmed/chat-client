<template>
  <div class="message-container">
    <div class="author">
      {{ message.author.name }}
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
import moment from 'moment'

export default {
  props: {
    message: {
      type: Object,
      required: true
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
  padding: 0.5em;
  background-color: white;
  border-radius: 0.25em;
}
.timestamp {
  font-size: small;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
}
.message, .timestamp {
  margin-top: 0.2em;
}
.author {
  font-weight: bold;
}
</style>