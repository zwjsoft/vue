<template>
  <div id="C1">
    <h1>{{msg}}</h1>
    <ul>
        <li v-for="person in getAll" v-bind:key="person.name">
           <span>{{person.name}}</span>
           <span>{{person.money}}</span>
        </li>
    </ul> 
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'c1',
  data () {
    return {
      msg: 'c1'
    }
  },
  computed:{
    // personList(){
    //   return this.$store.state.personList
    // }
    ...mapGetters(["getAll"])
  }
}
</script>

<style scoped>
    #C1{
        margin: 10px;
        border: 1px solid;
    }
    li{
        list-style: none;
        height: 20px;
        background: lightcoral;
        margin: 10px
    }
</style>
