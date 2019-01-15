import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {path:'/home',component:Home,children: [
            {path:'/about',component:About},
            {path:'/help',component:About}
        ]},
        {path:'/login',component:Login},
        
        {path:'/',component:Login},
    ]
})

