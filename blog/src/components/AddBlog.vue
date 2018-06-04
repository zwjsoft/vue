<template>
  <div id="addBlog">
      <h2>添加博客</h2>
      <form action="">
          <label>标题</label>
          <input type="text" v-model="blog.title" />
          <label>内容</label>
          <textarea v-model="blog.content"></textarea> 
          <div id="checkboxes">
              <label>Vue.js</label>
              <input type="checkbox" value="Vue.js" v-model='blog.categories'>
              <label>React.js</label>
              <input type="checkbox" value="React.js" v-model='blog.categories'>
              <label>Angular</label>
              <input type="checkbox" value="Angular" v-model='blog.categories'>
              <label>Node.js</label>
              <input type="checkbox" value="Node.js" v-model='blog.categories'>
          </div>
          <label>作者</label>
          <select v-model="blog.author">
              <option v-for="author in authors">
                  {{author}}
              </option>
          </select>
          <button v-on:click.prevent="addBlog">添加博客</button>
      </form>
      <hr>
      <div id="preview">
          <h3>博客总览</h3>
          <p>博客标题：{{blog.title}}</p>
          <p>博客内容：</p>
          <p>{{blog.content}}</p>
          <p>博客分类</p>
          <ul>
              <li v-for="category in blog.categories">
                  {{category}}
              </li>
          </ul>
          <p>作者：{{blog.author}} </p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addBlog',
  data () {
    return {
      blog:{
          title:"",
          content:"",
          categories:[],
          author:""
      },
      authors:['zwj','zyh','zy']
    }
  },
  methods:{
      addBlog(){
          axios.post("https://blogdb-bc48d.firebaseio.com/blog.json",this.blog).then(response=>{
              console.log(response)
              this.$router.push({path:"/",query:{alert:"用户博客成功！"}})
          })
      }
  }
}
</script>


<style scoped>
    #addBlog *{
        box-sizing: border-box
    }
    #addBlog{
        margin:20px auto;
        max-width: 600px;
        
    }
    label{
        display: block;
        margin: 20px 0 10px

    }
    input[type="text"],textarea,select{
        display: block;
        width:100%;
        padding:8px
    }
    textarea{
        height: 100px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0px
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px
    }
    button{
        display: block;
        margin:10px 0;
        padding: 10px;
        font-size: 18px;
        border-radius: 4px
    }
</style>
