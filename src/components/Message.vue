<template>
  <div class="message-container">
    <div class="message">
      {{ message.text }}
    </div>
    <div class="timestamp">
      {{ message.timestamp | date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  filters: {
    date: (value) => {
      const date = new Date(value)
      return `${date.getHours()}:${date.getMinutes()}`
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
  margin-top: 0.2em;
  font-size: small;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
}
</style>