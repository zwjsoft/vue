<template>
  <div class="container">
    <div v-for="(item,index) in this.question.numbers" :key="index">
        <div v-show='questionState.btip'>
        <img class="numberImg" v-for="i in item.number" :key="i" src="../assets/apple.png" alt="">
        </div>
        <div class="numberBox" >
        <div class="operation">{{item.operation}}</div>           
        <span v-show="showIndxe(index)">{{item.number}}</span>
        </div>

    </div>
    <img src="./../assets/pig.jpg" v-show="questionState.eflag" alt="">
    <img src="./../assets/smile.jpg" v-show="questionState.oflag" alt="">
  </div>
</template>

<script>
export default {
  name: 'ShowQuestion',
  props: ['question','questionState'],
  data () {
    return {

    }
  },

    methods:{
        showIndxe(index){
            return this.questionState.oflag || this.question.hideNumberIndex!=index
        }
        
    }

}
</script>


<style scoped>
    img{
        height:100px
    }
    .numberBox{
        position: relative;
        height: 40px;
        border-bottom:1px solid lightgray;
        margin: 10px;
        width:200px;
        left:50%;
        margin-left:-100px;
        overflow: auto;
    }
    .operation{
        position:absolute;
        width:100px;
        left:50%;
        margin-left:-100px;

    }
    .numberImg{
        height: 30px;
    }
</style>
