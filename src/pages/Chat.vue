<template>
  <div id="base">
    <chat-room id="chat" />
  </div>
</template>

<script>
import ChatRoom from '../components/ChatRoom'

export default {
  components: { ChatRoom }
}
</script>

<style scoped>
#base {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#chat {
  height: 90%;
  width: 70%;
}
</style>
