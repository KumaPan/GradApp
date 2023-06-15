<template>
    <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #0C8F7F" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Learning Station</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" href="#" to="/">Home</router-link>
        </li>
          <li v-if="$store.state.isAuthenticated">
            <router-link class="nav-link active" aria-current="page" href="#" to="/dashboard/leads/add">Leads</router-link>
          </li>
          <li v-if="$store.state.isAuthenticated">
            <router-link class="nav-link active" aria-current="page" href="#" to="/dashboard/lesson-prechoice">Path</router-link>
          </li>
      </ul>
  
       
        <div v-if="$store.state.isAuthenticated">
          <a class="btn btn-primary"  @click="toggleClass()">
            <i class="bi bi-person-circle"></i>
          </a>
          <div  :class="{'d-none': isDropdownHidden}" class="dropdown buttonProfile" id="profile">
            <div v-for="lead in leads" v-bind:key="lead.id" class="card card-body" id="profiling">
              <router-link :to="{ name: 'ProfileRouter', params: { id:lead.id }}"  class="" type="button">Profile</router-link> 
              <router-link to="/learning/path-tool"  class="" type="button">Path tool</router-link>   
              <button @click="logout()" class="btn btn-danger mt-2">Logout</button>
            </div>
          </div>
        </div>

        <div v-else id="button-group">
        <router-link type="button" class="btn text-white ms-2" style="background-color: #0D1E37" to="/login">Login</router-link>
        <router-link type="button" class="btn text-white ms-2" style="background-color: #027B48" to="/sign-up">Sign up</router-link>
      </div>
     
     
    </div>
  </div>
</nav>
    </div>    
</template>

<script>
import Signup from '@/views/Signup.vue'
import axios from 'axios'

    export default{
        name: 'Navbar',

        data(){
          return{
            isDropdownHidden: true,
            isMounted: false,
            storeState: this.$store.state.isAuthenticated,
            leads: [],
            leads: {}
          };
        },

        mounted() {
    if (!this.isMounted) {
      console.log(this.storeState);
      this.isMounted = true;
    }

    this.getLeads()
  },
        
        components:{
            Signup
        },

        methods: {
          toggleClass(){
            // console.log('i am clicking this bitch')
            this.isDropdownHidden = !this.isDropdownHidden;
          },

          logout(){
            axios
                .post('/api/v1/token/logout/')
                .then(response => {
                    console.log('logged out')
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
                axios.defaults.headers.common['Authorization'] = ''
                localStorage.removeItem('token')
                this.$store.commit('removeToken')

                this.$router.push('/')
        },
        getLeads(){
            axios
                .get('/api/v1/leads/')
                .then(response=>{
                    this.leads = response.data
                })

                .catch(error =>{
                    console.log(error)
                })
        }
        }
    }
</script>

<style>
    /* #button-group{
        
    } */
    #profiling{
      position: absolute;
    }
    .buttonProfile{
      right: 65px;
    }
</style>