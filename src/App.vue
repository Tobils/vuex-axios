<template>
  <div id="app">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-color: #ffffff;
    font-family: 'Assistant', sans-serif;
    color: #071c4d;
}

</style>
