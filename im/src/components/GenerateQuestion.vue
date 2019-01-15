<template>
  <div>
    <div class="form-group">
        <label for="input1">难度：</label>
        <input type="number" v-model="difficult.max" id="input1" />    
        <label for="input2">模式：</label>
        <input type="number" v-model="difficult.left" />   + 
        <input type="number" v-model="difficult.right" />    
    </div>
 
 </div>
 
</template>

<script>
export default {
  name: 'GenerateQuestion',
  props:['difficult'],
  data () {
    return {

      question:{
          numbers:[],
          hideNumberIndex:-1,
          leftExpress:'',
          rightExpress:'',
          operations:[],
      }
    }
  },
  created(){
       this.$options.methods.generateQuestion.call(this)
  },
    methods:{
        generateQuestion(){
            this.question.numbers=[]
            this.question.leftExpress=''
            this.question.rightExpress=''
            this.question.hideNumberIndex=-1
            let tmp=this.difficult.max
            let operation='+'
            let leftresult=0
            for(let i=1;i<=this.difficult.left;i++){
                if(i==1){
                    operation='+'
                }
                else{
                    if(Math.random()<0.5) {
                        operation='+'
                    }else{
                        operation='-'
                    }
                }
                tmp=(operation=='+')?(this.difficult.max-leftresult):leftresult
                let number=Math.floor(Math.random()*tmp)
                this.question.numbers.push({
                    number,
                    operation
                    })
                this.question.leftExpress+=(i==1?'':operation)+number
                leftresult=eval(this.question.leftExpress)
            }
            let rightresult=0
            for(let i=1;i<=this.difficult.right;i++){
                let number
                if(i==this.difficult.right){
                    operation=(leftresult>=rightresult)?'+':'-'
                    number=Math.abs(leftresult-rightresult)
                }else{
                    if(i==1){
                    operation='+'
                    }else{
                        if(Math.random()<0.5) {
                            operation='+'
                        }else{
                            operation='-'
                        }                       
                    }
                    tmp=(operation=='+')?(this.difficult.max-rightresult):rightresult
                    
                    number=Math.floor(Math.random()*tmp)
                }
                this.question.numbers.push({
                    number,
                    operation:i==1?'=':operation
                    })
                this.question.rightExpress+=(i==1?'':operation)+number
                rightresult=eval(this.question.rightExpress)

            }
            this.question.hideNumberIndex=Math.floor(Math.random()*(parseInt(this.difficult.left)+parseInt(this.difficult.right)))
            this.$emit('generateQuestion',this.question)
        }

    }
}
</script>

<style scoped>
    
</style>
