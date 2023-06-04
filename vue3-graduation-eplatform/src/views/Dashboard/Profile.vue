<template>
    <div class="profile-page pt-5">
        <DashboardComponent />
    <div class="container" >
        
        <div class="row justify-content-md-center">
            <div class="col-md-8 mb-3">
                <h2>Profile</h2>
            </div>
            <div class="col-md-12">
                <button @click="logout()" class="btn btn-danger">Logout</button>
                <router-link type="button" to="/dashboard/lessons" class="btn btn-primary">Lessons</router-link>
                <router-link type="button" to="/dashboard/lesson-prechoice" class="btn btn-primary">Prechoice Lessons</router-link>
                <router-link type="button" to="/dashboard/leads" class="btn btn-secondary">Leads</router-link>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'
// import { response } from 'express';
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';

export default{
    name: 'Profile',

    components: {
        DashboardComponent
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