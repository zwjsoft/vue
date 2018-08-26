import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store( {
    strict:true,
    state:{
        personList:[
            {name:"zwj",money:1000},
            {name:"zy",money:1200},
            {name:"zyh",money:2000}
          ]
    },
    getters:{
        getAll(state){
            return state.personList.map(person=>{
                return {
                    name:"**"+person.name+"**",
                    money:"$"+person.money
                }
            })
        }
    },
    mutations:{
        reduce:(state,payload)=>{            
            state.personList.forEach(person=>{
                person.money-=payload
            })
        }
    },
    actions:{
        reduce:(content,payload)=>{
            setTimeout(() => {
                content.commit("reduce",payload)
            }, 3000);
            
        }
    }
})