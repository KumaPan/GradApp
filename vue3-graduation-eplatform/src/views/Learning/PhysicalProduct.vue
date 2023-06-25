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
                <h2>Physical product & Service</h2>
                <p>In this section you will see the different ptroduct that have been ideaslized and planned in the making.
                    with different designs and functions, you can compare it to other similar products on the market wit hthe competitive 
                    analysis tool.
                </p>
            </div>
            <div class="card col-md-12 mt-5" id="branding-card">
                <h3>Overview</h3>
                <h6></h6>
                <div class="p-1" style="width: 25rem;">
                    <div class="card mt-3 mb-3" 
                    v-for="lead in leads"
                    v-bind:key="lead.id">
                    <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Product name:{{ lead.product_name }}</h5>
                            <p class="card-text">Product function:{{ lead.product_function }}</p>
                            <hr>
                            <p class="card-text">Product service:{{ lead.product_service }}</p>
                            <hr>
                            <p class="card-text">Product design:{{ lead.product_design }}</p>
                            <a href="#" class="btn btn-primary">Select product</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <h3>Competitive analysis</h3>
                <p><b>Comparing products to products</b></p>
                <p>Using the following tool will allow you to compare the specifica parts of your application with your very own product </p>
                <div class="d-flex justify-content-center">
                    <div class="comp-box">
                        <div class="d-flex ms-3 mb-3 mt-4">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-success btn-sm">Graph 1</button>
                                <button type="button" class="btn btn-success btn-sm">Graph 2</button>
                            </div>
                        </div>
                        <div v-for="lead in leads"
                            v-bind:key="lead.id"  
                            class="col-md-3 ms-3" id="comparison-brand">
                                <div v-if="lead.product_name == null">
                                </div>

                                <select v-if="lead.product_name !== null"
                                class="form-select" aria-label="Default select example">
                                    <option selected>Choose product</option>
                                    <option>{{lead.product_name}}</option>
                                </select>

    
                            </div>
                        <p class="text-center"><b>Competitive analysis toolbox</b></p>
                        <h6 class="text-center">Name of product selected</h6>
                        <div class="frist-graphBox">

                        </div>
                        <div class="second-graphBox">
                            
                        </div>
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
    name: 'PhysicalProduct',

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

.comp-box{
    border-radius: 25px;
    background-color: #0C8F7F;
    height: 35rem;
    width: 70rem;
    margin-bottom:2rem;
    margin-left: 5rem;
    box-shadow: -5px 5px #06ad9993;
}
</style>