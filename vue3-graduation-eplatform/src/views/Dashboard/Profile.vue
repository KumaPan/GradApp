<template>
    <div class="profile-page">
        <DashboardComponent />
        
</div>
</template>

<script>

import axios from 'axios'
// import { response } from 'express';
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';

export default{
    name: 'Profile',

    components: {
    DashboardComponent,
    ProfileComponent
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