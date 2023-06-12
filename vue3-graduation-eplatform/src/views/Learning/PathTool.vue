<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-2">
                <h2>Pathing tool</h2>
                <p>In this section you will see the different brands that you have added to your profile.
                    Here you can make a todo list for planning to improve areas of your brand.
                </p>
            </div>
            <div class="card col-md-12 mt-5" id="branding-card">
                <h3>Branding</h3>
                <h6>Core of the product</h6>
                <div class=" p-1" style="width: 25rem;">
                    <div class="mt-3" 
                    v-for="lead in leads"
                    v-bind:key="lead.id">
                    <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Brand name:{{ lead.brand_name }}</h5>
                            <p class="card-text">Brand description:{{ lead.brand_description }}</p>
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

<style scoped>
.card{
    border: none;
}

#branding-card{
    background-color: rgb(231, 231, 231);
}
</style>