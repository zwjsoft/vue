<template>
  <div id="C2">
    <h1>{{msg}}</h1>
    <ul>
        <li v-for="person in this.$store.getters.getAll" v-bind:key="person.name">
           <span>{{person.name}}</span>
           <span>{{person.money}}</span>
        </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'c2',
  data () {
    return {
      msg: 'c2'
    }
  },
    computed:{
    personList(){
      return this.$store.state.personList
    }
  }
}
</script>

<style scoped>
    #C2{
        margin: 10px;
        border: 1px solid;
    }
    ul{
        display: inline;
    }
    li{
        list-style: none;
        float: left;
        height: 20px;
        background: lightcoral;
        margin: 10px
    }
</style>
