<template>
    <nav>
        <ul>
        <li>
            <router-link exact to="/">读博客</router-link>
            <router-link exact to="/add">写博客</router-link>
        </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:"blogHeader"
}
</script>

<style>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0px
    }
    li{
        display: inline-block;
        margin: 0px 30px
    }
    a{
        color:white;
        border-radius: 6px;
        padding:10px
    }
    nav{
        background: lightgrey;
        padding: 30px;
        margin-bottom: 30px
    }
    .router-link-active{
        background:yellowgreen;
        color:yellow;
    }
</style>

