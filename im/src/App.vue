<template>
  <div id="app" class="container">
    <div><H2>儿童学数学</H2></div>
    <GenerateQuestion ref="questionRef" v-bind:difficult="difficult" v-on:generateQuestion="onGenerateQuestion"/>
    <button class="btn btn-primary btn-lg btn-block" v-on:click="generateQuestion">出题</button>
    <ShowQuestion  v-bind:question="question" v-bind:questionState="questionState" />
    <AnswerQuestion v-on:tips="onTips" v-on:commitAnswer="onCommitAnswer" v-bind:max="difficult.max" v-bind:answer="answer" /> 
  </div>
</template>

<script>
import GenerateQuestion from './components/GenerateQuestion'
import ShowQuestion from './components/ShowQuestion'
import AnswerQuestion from './components/AnswerQuestion'
export default {
  name: 'app',
  data(){
    return {
      question:{},
      answer:'',
      questionState:{
        eflag:false,
        oflag:false,
        btip:false
      },
      difficult:{
          max:10,
          left:2,
          right:1
      },
    }
  },
  components: {
    GenerateQuestion,
    ShowQuestion,
    AnswerQuestion
  },
  methods:{
    onGenerateQuestion(question){
      this.question=question
      this.answer=question.numbers[question.hideNumberIndex].number
      this.questionState={
          eflag:false,
          oflag:false,
          btip:false
        }
    },
    generateQuestion(){
      this.$refs.questionRef.generateQuestion()
    }
    ,
    onCommitAnswer(flag){
      if(flag){
        this.questionState.eflag=false
        this.questionState.oflag=true
      }else{
        this.questionState.eflag=true
        this.questionState.oflag=false
      }
    },
    onTips(){
      this.questionState.btip=!this.questionState.btip
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
  margin-top: 10px;
}
</style>
