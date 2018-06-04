<template>
  <div class="p2">
    <ul>
      <li v-for="p in ps" :key="p.name">
        <span>{{p.name}}</span>
        <span>{{p.money}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'p2',
  computed:{
    ps(){
      return this.$store.state.ps;
    }
  }
}
</script>

<style scoped>
div{
    height: 200px;
    border:1px solid green;
    margin:20px
  }
</style>
