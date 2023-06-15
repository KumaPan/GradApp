<template>
    <div class="overV">
    <div class="container" >  
        <div class="row">
            <div class="col-md-12 p-1"
            >
                <h2>Overview</h2>
                <PersonaComponent />
                <h2 class="">{{ lead.title }}</h2>
                <hr>
                <div>
                    <router-link to="/dashboard/leads" class="btn btn-primary" type="button">Edit</router-link>
                </div>
                <div v-for="lead in leads" v-bind:key="lead.id">
                    <router-link :to="{ name: 'ProfileRouter', params: { id:lead.id }}" class="btn btn-primary" type="button">Edit</router-link>
                </div>
                
            </div>
            <div class="col-md-6 pt-1">   
                <div class="card" style="height:15rem; box-shadow: 5px 5px #06AD99;">
                    <div class="card-body">
                        <h3 class="card-title">Contact information</h3>
                        <p><strong>Name:</strong>{{ lead.contact_person }}</p>
                        <p><strong>Email:</strong>{{ lead.email }}</p>
                        <p><strong>Phone:</strong>{{ lead.phone }}</p>
                        <p><strong>Created at:</strong>{{ lead.created_at }}</p>
                        <p><strong>Modified at:</strong>{{ lead.modified_at }}</p>
                    </div>
                </div>             
            </div>
            <div class="col-md-6 pt-1">
                <div class="card" style="height: 15rem; box-shadow: 5px 5px #06AD99;">
                    <div class="card-body">
                        <h3 class="card-title">Details</h3>
                        <p><strong>Website:</strong>{{ lead.website }}</p>
                        <p><strong>Goals:</strong>{{ lead.goals }}</p>
                        <p><strong>Keywords:</strong>{{ lead.keyword }}</p>
                        <p><strong>Team Members:</strong>{{ lead.team_members }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- <div class="col-md-12">
            <h2>Current Path</h2>
        </div> -->
    </div>
</div>
</template>

<script>

import axios from 'axios'

import PersonaComponent from '@/components/PersonaComponent.vue';

export default {
    name: 'ProfileComponent',
    data() {
        return{
            lead: {},
            leads: []
        }
    },

    mounted(){
        this.getLead()
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
        },
              getLead(){
            this.$store.commit('setIsLoading', true)
            
            const profileID = this.$route.params.id

            axios
                .get(`/api/v1/leads/${profileID}/`)
                .then( response => {
                    console.log(response)
                    this.lead = response.data
                }) 
                .catch(error =>{
                    console.log(error)
                })           
            
            
            this.$store.commit('setIsLoading', false)


        }
    }
}
</script>

<style>
   .profile-page{
        background-color: white; 
        min-height: calc(100vh - 56px);
   }
   .overV{}
</style>