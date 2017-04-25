<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <hr>
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/user">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue-cli+router'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  font-weight: normal;
  font-size: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
 color: #42b983;
 font-size: 25px;
}
 body{
  background: #eee
} 
</style>
