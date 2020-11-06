<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/berita" class="nav-item">Berita</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lanbg="scss">
.nav-item {
  margin: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
