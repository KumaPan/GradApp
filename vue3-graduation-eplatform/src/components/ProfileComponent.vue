<template>
    <div class="">
    <div class="container" >  
        <div class="row">
            <div class="col-md-12 p-1">
                <h2>Overview</h2>
                <PersonaComponent />
                <h2 class="">{{ lead.title }}</h2>
                <hr>
                <router-link to="/" class="btn btn-primary" type="button">Edit</router-link>
            </div>
            <div class="col-md-6 pt-1">   
                <div class="card" style="height:15rem;">
                    <div class="card-body">
                        <h3 class="card-title">Contact information</h3>
                    </div>
                </div>             
            </div>
            <div class="col-md-6 pt-1">
                <div class="card" style="height: 15rem;">
                    <div class="card-body">
                        <h3 class="card-title">Details</h3>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="col-md-12">
            <h2>Current Path</h2>
        </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'

import PersonaComponent from '@/components/PersonaComponent.vue';

export default{
    name: 'ProfileComponent',
    data() {
        return{
            lead: {}
        }
    },

    components: {
        PersonaComponent,
        
    },

    methods:{
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
        }
    }
}
</script>

<style>
   .profile-page{
        background-color: white; 
        min-height: calc(100vh - 56px);
   }
</style>