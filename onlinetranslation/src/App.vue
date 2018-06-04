<template>
  <div id="app">
    <h1>在线翻译</h1>
    <transtionForm v-on:TranslateEvent="getTranslation" />
    <transtionOutput v-text="translatedText" />
  </div>
</template>

<script>

import TranstionForm from './components/TranslationForm'
import TranstionOutput from './components/TranslationOutput'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    TranstionForm,
    TranstionOutput
  },
  data(){
    return {
      translatedText:""
    }
  },
  methods:{
    getTranslation(txt,language){
      axios.get(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180511T150057Z.d34de71fdc462e98.4068c22c6045ea85ec788b6d069d2837f254c7a5&text=${txt}&lang=${language}`).then(response=>{
            this.translatedText=response.data.text[0]
        })
    }
  }
}
</script>

<style>


</style>
