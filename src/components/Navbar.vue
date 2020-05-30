<template>
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
      <li>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
    </ul>
  </nav>
</template>
