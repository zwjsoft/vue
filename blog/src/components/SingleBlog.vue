<template>
    <div class="singleBlog">
       <h1>
           {{blog.title}}
        </h1>
        <article>
            {{blog.content}}
            <p>作者：{{blog.author}}</p>
            <p>分类：</p>
                <ul>
                    <li v-for="t in blog.categories" :key="t">{{t}}</li>
                </ul>               
        </article>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"singleBlog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
      axios.get("https://blogdb-bc48d.firebaseio.com/blog/"+this.id+".json").then((response)=>{
          console.log(response)
          this.blog=response.data
      })
    }
}
</script>

<style>
.singleBlog{
    background: #aaa;
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
    border:1px dotted #aaa
}
</style>
