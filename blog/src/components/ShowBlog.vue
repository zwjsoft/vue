<template>
  <div v-theme:column="'wide'" id="showBlog">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索" />
      <div v-for="blog in filterBlogs" :key="blog.id" class="singleBlog">
          <router-link v-bind:to="'/singleBlog/'+blog.id">
          <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
            </router-link>

          <article>{{blog.content | snippet}}</article>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'showBlog',
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created(){
      axios.get("https://blogdb-bc48d.firebaseio.com/blog.json").then((response)=>{
          console.log(response)
          //this.blogs=response.data.slice(0,10)
          return response.data
      }).then(data=>{
          let arr=[]
          for(let key in data){
              data[key].id=key
              arr.push(data[key])
          }
          this.blogs=arr.slice(0,10)
          console.log(this.blogs)
      })
  },
  computed:{
      filterBlogs(){
          return this.blogs.filter((value)=>{
              return value.title.match(this.search)
          })
      }
  },
  filters:{
      toUppercase(value){
          return value.toUpperCase()
      }
  },
  directives:{
      rainbow:{
        bind(el,binding,vnode){
            el.style.color="#"+Math.random().toString(16).slice(2,8);
        }
      }
  }
}
</script>


<style scoped>
    #showBlog{
        max-width: 800px;
        margin: 0 auto
    }
    .singleBlog{
        box-sizing: border-box;
        background: lightgray;
        padding: 20px;
        margin:10px 0;
        border:1px dotted #aaa
    }
    input[type="text"]{
        width:100%;
        padding:10px;
        box-sizing: border-box
    }
</style>
