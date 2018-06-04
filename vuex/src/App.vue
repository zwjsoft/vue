<template>
  <div id="app">
    <p1></p1>
    <p2></p2>
  </div>
</template>

<script>
import P1 from './components/P1'
import P2 from './components/P2'
export default {
  name: 'App',
  components: {
    P1,
    P2
  },
  data(){
    return {
      
    }
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
  margin-top: 60px;
}
</style>
