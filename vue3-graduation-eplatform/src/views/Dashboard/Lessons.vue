<template>
    <div class="">
        <div class="continater mt-5 ps-5">
            <h2>Lessons Page</h2>
            <div class="row justify-content-md-center mt-5">
                <div class="row row-cols-1 row-cols-md-3 g-4"
                        v-for="lead in leads"
                        v-bind:key="lead.id">
                    <div v-if="lead.keyword == 'Omnichannel'">
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://picsum.photos/id/36/600/400" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Fluid Design</h5>
                                <p class="card-text">
                                
                                </p>
                                <router-link to="/dashboard/lessons/first-lesson" class="btn btn-primary">Read more</router-link>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-12 mt-5">
                                <h4>Sub content</h4>
                                <div class="d-flex ">
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/130/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/100/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <!-- second lesson -->

                    <div v-if="lead.keyword == 'Dynamic'">
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://picsum.photos/id/529/600/400" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">HTML Dynamic Design</h5>
                                <p class="card-text">
                                
                                </p>
                                <router-link to="/dashboard/lessons/second-lesson" class="btn btn-primary">Read more</router-link>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-12 mt-5">
                                <h4>Sub content</h4>
                                <div class="d-flex ">
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/130/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/100/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>

                   <!-- third lesson -->

                   <div v-if="lead.keyword == 'Design'">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Onboarding page </h5>
                                <p class="card-text">
                                
                                </p>
                                <router-link to="/dashboard/lessons/third-lesson" class="btn btn-primary">Read more</router-link>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-12 mt-5">
                                <h4>Sub content</h4>
                                <div class="d-flex ">
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/130/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="card ms-5">
                                            <img src="https://picsum.photos/id/100/600/400" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">Content under construction</h5>
                                                <p class="card-text">Sub content text</p>
                                                <a href="#" class="btn btn-primary">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    
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
    name: 'Lessons',

    data(){
        return{
            leads:{}
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

body{
    background-color: white !important;
}

#second{
        background-color: #048171;
        width: 2000px;
        height: 450px;
        margin-top: 50px;
        margin-bottom: 100px;
    }
#third{
    background-color: #048171;
    height: 450px;
}

#insideBox{
    background-color:#06AD99 ;
    height: 450px;
    width: 1500px;
    margin-left:300px ;
}

#insideBoxTwo{
    background-color: #06AD99;
    height: 450px;
    width: auto;
    margin-left: 200px;
    margin-right: 200px;
}
</style>