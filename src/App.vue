<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'chat' }">Chat</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
