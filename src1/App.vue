<template>
  <div id="app">
    <h1>! Welcome to 脚手架学习 的world !</h1>
    <hr>
    <aa></aa>
    <bb></bb>
    <cart></cart>
  </div>
</template>

<script>
import aa from './components/aa.vue';
import bb from './components/bb.vue';
import cart from './components/cart.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    aa,bb,cart
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
  background: #999
}

h1{
  font-weight: normal;
  font-size: 35px;
  color: white
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
}
body{
  background: #666
}
</style>
