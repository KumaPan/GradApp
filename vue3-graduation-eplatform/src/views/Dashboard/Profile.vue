<template>
    <div class="profile-page">
        <DashboardComponent />
        <h2>stuff</h2>
        <ProfileComponent />
</div>
</template>

<script>

import axios from 'axios'
// import { response } from 'express';
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';
import ProfileComponent from '@/components/layouts/ProfileComponent.vue';
// import PersonaComponent from '@/components/PersonaComponent.vue';

export default{
    name: 'Profile',

    components: {
    DashboardComponent,
    ProfileComponent,
    // PersonaComponent,
},

    methods:{
      
    }
}
</script>

<style>
   .profile-page{
        background-color: white; 
        min-height: calc(100vh - 56px);
   }
</style>