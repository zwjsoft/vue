<template>
    <div>
        <div class="form-group">
        <label for="input2">答案：</label>        
        <input type="number" v-model="answerInput" id="input2" />
        <button class="btn btn-primary" v-on:click="result(answerInput)">答题</button>   
        <button class="btn btn-primary" v-on:click="tips()">提示</button>   
        </div> 
        <button class="btn btn-primary  btn-lg" v-for="number in max<=50?(parseInt(max)+1):0" :key="number" v-on:click="result(number-1)">{{number-1}}</button>
    </div>
</template>

<script>
export default {
  name: 'ShowQuestion',
  props: ['max','answer'],
  data () {
    return {
       answerInput:'' 
    }
  },

    methods:{
        result(n){
            if(n==this.answer){
                this.$emit('commitAnswer',true)
            }else{
                this.$emit('commitAnswer',false)
            }
        },
        tips(){
            this.$emit('tips')
        }
        
    }
}
</script>


<style scoped>
    
</style>
