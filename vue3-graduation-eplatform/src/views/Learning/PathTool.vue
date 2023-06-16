<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-xl-2 px-sm-2 px-0" style="background-color: #0C8F7F">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/dashboard/profile" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Pathing Tool</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <router-link to="/" href="#" class="nav-link align-middle px-0 text-white">
                            <i class="bi bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/learning/path-tool" href="#"  class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-c-circle"></i> <span class="ms-1 d-none d-sm-inline">Brand</span> 
                        </router-link>
                    </li>
                    <li>
                        <router-link href="#" class="nav-link px-0 align-middle text-white" to="/learning/physical-product">
                            <i class="bi bi-door-open"></i><span class="ms-1 d-none d-sm-inline">Physical product & Service</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#"  class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-explicit"></i><span class="ms-1 d-none d-sm-inline">Extenstion & Warranty</span>
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </div>
        <div class="col">
            <div class="col-md-12 mt-2">
                <h2>Branding</h2>
                <p>In this section you will see the different brands that you have added to your profile.
                    Here you can make a todo list for planning to improve areas of your brand.
                </p>
            </div>
            <div class="card col-md-12 mt-5" id="branding-card">
                <h3>Overview</h3>
                <h6>Core of the product</h6>
                <div class="p-1" style="width: 25rem;">
                    <div class="card mt-3 mb-3">
                    <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <span v-for="lead in leads"
                            :key="lead.id">
                                <div v-if="lead.brand_name == null">
                                    <h5 class="card-title"></h5>
                                </div>
                                    <div v-if="lead.brand_name !== null">
                                        <h5 class="card-title">Brand name:{{ lead.brand_name }}</h5>
                                    </div>
                            </span>

                            <span v-for="lead in leads"
                            :key="lead.id">
                                <div v-if="lead.brand_name == null">
                                    <p class="card-text"></p>
                               </div>
                                    <div v-if="lead.brand_name !== null">
                                        <p class="card-text">Brand description:{{ lead.brand_description }}</p>
                                    </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <h3>Create New task</h3>
                <div class="ms-3">
                    <h6 class="">what will you do this week?</h6>
                </div>
                <div class="to-do">
                    <to-do-component></to-do-component>
                </div>
            </div>
            
            <div class="col-md-12 mt-5 text-center" >
                <h3>Tracking & Progression</h3>
                <div class="">
                    <h6 class="">Keep up to date with task this week!</h6>
                </div>
                <div class="tracking" id="tracking-box">
                    <tracking-component></tracking-component>
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios'
import ToDoComponent from '@/components/ToDoComponent.vue'
import TrackingComponent from '@/components/TrackingComponent.vue'

export default {
//   components: { ToDoComponent },
    name: 'PathTool',

   components: {
    ToDoComponent,
    TrackingComponent
   },

    data(){
        return{
            leads:[],
            // brand_name: 

         
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

 <!-- this is the setup for the todo list  --> 


<style scoped>
.card{
    border: none;
}

#branding-card{
    background-color: rgb(231, 231, 231);
}

#tracking-box{
    border-radius: 25px;
    background-color: #0C8F7F;
    height: 30rem;
    margin-bottom:2rem;
    box-shadow: -5px 5px #06ad9993;
}
</style>