<template>
    <div class="">
        <div class="continater mt-5">
            <h2>Lessons Page</h2>
            <div class="row justify-content-md-center mt-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
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
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Onboarding page design</h5>
                            <p class="card-text">

                            </p>
                            <router-link to="/dashboard/lessons/third-lesson" class="btn btn-primary">Read more</router-link>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-5"><h2> Goal Tracking</h2></div>
        <section class="container-fluid" id="second">
            <div class="" id="insideBox">
                    <!-- <h2>Progression</h2> -->
                    <button class="btn btn-danger" @click="progression.previousStep">Previous</button>
                    <button class="btn btn-primary ms-3" @click="progression.nextStep">Next</button>
                    <Progression  :data="dataSteps" ref="progression"/>
                    
            </div>            
                <!-- <LineBarTracking /> -->
        </section>


        <div class="mt-5"><h2>Progressions</h2></div>
        <section class="container-fluid" id="third">
            <div class="row" id="insideBoxTwo">
                <div class="col-md-12">
                    <h3>Current completed progress: Null%</h3>
                    <div class="progress h-50" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 10%">10%</div>
                    </div>
                </div>
                <hr class="hr">
                <div class="col-md-3">
                    <h4>Total lessons this week: Null%</h4> 
                    <div class="progress h-25" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar w-25">100</div>
                    </div>
                </div>
                <hr class="hr">
                <div class="col-md-6">
                    <h4>Completed lessons this week: Null%</h4> 
                    <div class="progress h-25" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar w-25">100</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
// import LineBarTracking from '@/components/LineBarTracking.vue';

export default {
    name: 'Lessons',
    // data() { ##Nothing was wrong with doing it this way, orbs were the same color which is why it didnt work
    //     return { 
    //         dataSteps: {
    //         steps: ['Step 1', 'Step 2', 'Step 3'],
    //         currentStep: 1,
    //         activeColor: '#048171',
    //         passiveColor: '#06AD99'
    //         }
    //     }
    // },
    components: {
        Progression
    },

    methods: {
        
    }
}
</script>

<script setup>
import Progression from '@/components/Progression.vue';
import { ref } from 'vue'

const progression = ref();

const dataSteps ={
    Lesson: ['Lesson 1', 'Lesson 2', 'Lesson 3'],
            currentStep: 1,
            activeColor: '#048171',
            passiveColor: '#00C170'
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