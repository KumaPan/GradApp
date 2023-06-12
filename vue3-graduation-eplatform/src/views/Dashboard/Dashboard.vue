<template>
    <div class="container">
        <div class="row justify-content-md-center mt-5">
            <div class="col-md-3 mb-3">
                <h2>Welcome</h2>
                <!-- <div v-for="lead in leads" v-bind:key="lead.id">
                    <router-link :to="{ name: 'ProfileRouter', params: { id:lead.id }}"  class="btn btn-primary" type="button">Let's Get Started</router-link>
                </div> -->
            </div>
            <!-- <div class="col-md-12">
                <p>In this section you will find a list of things you can do in the application</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'Dashboard',

    data(){
        return {
            leads: [],
        }
    },

    mounted (){
        this.getLeads()
    },

    methods: {
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