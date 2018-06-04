<template>
  <div id="app">
    <BlogHeader />
    <router-view />
  </div>
</template>

<script>
 //import AddBlog from './components/AddBlog'
// import ShowBlog from './components/ShowBlog'
 import BlogHeader from './components/BlogHeader'
// import SingleBlog from './components/SingleBlog'
export default {
  name: 'App',
  components:{
     //AddBlog
    // ShowBlog,
     BlogHeader
    // SingleBlog
  }
}
</script>

<style>

</style>
