<template>
  <div id="translationForm" class="row">
    <div class="col-md-6 col-md-offset-3">
      <form class="well" v-on:submit="translate">
        <input type="text" v-model="translationText" placeholder="请输入......" />
        <select v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Japenese</option>
        </select>
        <input type="submit" value="翻译" />
      </form>
    </div>  
  </div>
</template>

<script>


export default {
  name: 'translationForm',
  components: {
    
  },
  data(){
    return {
      translationText:"",
      language:"en"
    }
  },
  methods:{
    translate(e){
      //alert(this.translationText)

      
      this.$emit("TranslateEvent",this.translationText,this.language);
      e.preventDefault();
    }
  }
}
</script>

<style>

</style>
