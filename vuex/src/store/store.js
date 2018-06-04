import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export  const store=new Vuex.Store({
    strict:true,
    state:{
        ps:[
            {name:"zwj",money:100},
            {name:"zyh",money:60},
            {name:"zy",money:40}
        ]
    },
    getters:{
        ps1:function(state1){
            var arr=state1.ps.map(p=>{
              return {
                name:"**"+p.name+"**",
                money:p.money
              }
            })
            return arr
          }
    },
    mutations:{
       reduceMoney:(state,payload)=>{
            state.ps.forEach(element => {
                element.money-=payload
            })
       }
    },
    actions:{
        reduceMoney:(context,payload)=>{
            setTimeout(function(){
                context.commit("reduceMoney",payload)
            },2000)           
        }
    }
})