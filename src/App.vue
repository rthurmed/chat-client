<template>
  <div id="base">
    <chat id="chat" />
  </div>
</template>

<script>
import Chat from './components/Chat'

export default {
  name: 'App',
  components: { Chat }
}
</script>

<style scoped>
#base {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#chat {
  height: 90%;
  width: 70%;
}
</style>
