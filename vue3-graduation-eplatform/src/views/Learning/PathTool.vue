<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Pathing tool</h2>
                <div class="card" style="width: 30rem;">
                    <div class="p" 
                    v-for="lead in leads"
                    v-bind:key="lead.id">
                        <div class="card-body">
                            <h5 class="card-title">{{ lead.product_name }}</h5>
                            <p class="card-text">demo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios'

export default {
    name: 'PathTool',

    data(){
        return{
            leads:[]
        }
    },
    mounted(){
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

<style>

</style>