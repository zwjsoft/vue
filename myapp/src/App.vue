<template>
  <div>
    <h1> {{msg}}</h1> 
    <button v-on:click="reduce">降低收入</button>
    <c1></c1>
    <c2></c2>
  </div>
</template>

<script>
import C1 from './components/C1'
import C2 from './components/C2'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'App'
    }
  },
  components:{
    C1,C2
  },
  methods:{
    reduce(){
      // this.$store.state.personList.forEach(person=>{
      //     person.money-=10
      // })
      //this.$store.commit("reduce")
      //this.$store.dispatch("reduce",10)
    },
    ...mapActions(["reduce"])
  }
}
</script>

<style scoped>
  h1{
    margin: 0px auto
  }
</style>
