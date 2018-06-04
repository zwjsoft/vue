import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/add',
      name: 'add',
      component: AddBlog
    },
    {
      path: '/',
      name: 'show',
      component: ShowBlog
    },
    {
      path: '/singleBlog/:id',
      name: 'single',
      component: SingleBlog
    }
  ]
})
