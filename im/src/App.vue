<template>
  <div id="app">

    <IM />
  </div>
</template>

<script>
import IM from './components/IM.vue'

export default {
  name: 'app',
  components: {
    IM
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
