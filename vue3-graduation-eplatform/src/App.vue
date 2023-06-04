<template>
  <Navbar />
  
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

body{
  background-color: white;
}
nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>

<script>
import Navbar from '@/components/layouts/Navbar.vue'
import axios from 'axios'

  export default {
    name: 'App',

    components: {
     Navbar,
    },
    beforeCreate(){
      this.$store.commit('initializeStore')

      if(this.$store.state.token){
        axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
      } else{
          axios.defaults.headers.common['Authorization'] = ""
      }
    }
  }
</script>
