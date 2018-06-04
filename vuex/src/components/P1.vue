<template>
  <div class="p1">
    <ul>
      <li v-for="p in ps1" :key="p.name">
        <span>{{p.name}}</span>
        <span>{{p.money}}</span>
      </li>
    </ul>
    <button @click="reduceMoney(4)">降价</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
//import {} from 'vuex'
export default {
  name: 'p1',
  computed:{
    ps(){
      return this.$store.state.ps;
    },
    ...mapGetters([
      "ps1"
    ])
  },
  methods:{
    ...mapActions([
      "reduceMoney"
    ])
    // reduceMoney(amount){
    //   // this.$store.state.ps.forEach(element => {
    //   //       element.money-=10
    //   //   })
    //   //this.$store.commit("reduceMoney")
    //   this.$store.dispatch("reduceMoney",amount)
    //   }
    
  }
}
</script>

<style scoped>
  div{
    height: 200px;
    border:1px solid red;
    margin:20px
  }
  ul{
    
    list-style-type: none;
  }
  li{
    padding:10px;
    margin:10px;
    width:300px;
    position: relative;
    border: 1px solid;
    display: inline;
  }
</style>
