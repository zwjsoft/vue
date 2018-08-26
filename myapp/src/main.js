import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

new Vue({
  el: '#app',
  store:store,
  //components:{App}
  render: h => h(App)
})
