<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="profile-card text-center">
                    <div class="card-img-top"><i class="bi bi-person-circle" style="font-size: 10rem;"></i></div>
                        <div class="card-body">
                            <span v-for="lead in leads"
                            v-bind:key="lead.id">
                            <div v-if="lead.contact_person == null">
                                <h5 class="card-title"></h5>
                            </div>
                            <div v-else>
                                <h5 class="card-title">{{ lead.contact_person }}</h5>
                            </div>
                            
                            </span>
                            
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 10rem;">
                                <div class="progress-bar" :style="[width, backgroundColor]"></div>
                            </div>

                            <span v-for="lead in leads"
                            v-bind:key="lead.id">
                                <div v-if="lead.level_exp == null">
                                    <p class="card-text"></p>
                                </div>
                                <div v-else>
                                    <p class="card-text">Level - {{ lead.level_exp }}</p>
                                </div>
                            </span>
                            <div class="d-grid gap-1">
                                <a href="#" class="games " style="color: #0C8F7F;" @click="togglefirstClass()">Bagdes</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;" @click="togglesecondClass()">Leaderboard</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;" @click="togglethirdClass()">Stats</a>
                            </div>
                        </div>
                </div>
            </div>
            
            <div class="col-md-6" :class="{'d-none': isDropdownHidden}">
                    <div class="card gameTime" style="width: 35rem; height: 25rem;">
                        <div class="card-body">
                            <h5 class="card-title"><b>{{ badges }}</b></h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Earned badges</h6>
                            <div class="first-badge">
                            <!-- <p class="text-center"><b></b></p> -->
                            <div class="row justify-content-center">
                                <p class="text-center"><b>Product badges</b></p>
                                <div class="col text-center"  >
                                    <img src="@/assets/images/badges_grad.png" alt="tablebox" style="width: 70%;">
                                    <p>Table</p>
                                </div>
                                <div class="col">
                                    <img src="@/assets/images/badges_grad1.png" alt="vsbox" style="width: 70%;">
                                </div>
                                <div class="col">
                                    <img src="@/assets/images/badges_grad3.png" alt="question" style="width: 70%;">
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <p class="text-center"><b>Training badges</b></p>
                                <div class="col">
                                    <img src="@/assets/images/badges_grad2.png" alt="starbox" style="width: 70%;">
                                </div>
                                <div class="col">
                                    <img src="@/assets/images/badges_grad3.png" alt="question" style="width: 70%;">
                                </div>
                                <div class="col">
                                    <img src="@/assets/images/badges_grad3.png" alt="question" style="width: 70%;">
                                </div>
                            </div>
                            </div>   
                        </div>
                    </div>
            </div>

            <div class="col-md-6" :class="{'d-none': isDropdownHidden2}">
                <div class="card gameTime" style="width: 30rem; height: 25rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{ leaderboard }}</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                         
                    </div>
                </div>
            </div>
            
            <div class="col-md-6" :class="{'d-none': isDropdownHidden3}">
                <div class="card gameTime" style="width: 30rem; height: 25rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{ stats }}</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        Inside box
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'PersonaComponent',

    data(){
        return {
            leads:{},
            leads:[],
            width:'width: 10%',
            backgroundColor:'background-color:#0C8F7F',
            badges:'Badges',
            leaderboard:'Leaderboard',
            stats: 'Stats',
            isDropdownHidden: true,
            isDropdownHidden2: true,
            isDropdownHidden3: true,
            // questionsBadge:'"@/assets/images/badges_grad3.png"'
            
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
        },

        togglefirstClass(){
            this.isDropdownHidden = !this.isDropdownHidden
        },
        togglesecondClass(){
            this.isDropdownHidden2 = !this.isDropdownHidden2
        },
        togglethirdClass(){
            this.isDropdownHidden3 = !this.isDropdownHidden3
        },
            
    }
    
}
</script>

<style>
/* .persona{
    margin: auto;
  width: 50%;  
} */

.games{
    text-decoration: none;
    font-weight: bold;
}

.profile-card{
    border-radius: 25px;
    background-color:#f3f3f3;
    border: none;
}
.progress{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.gameTime{
    text-decoration: none;
    /* background-color:#f3f3f3; */
    box-shadow: 5px 5px #06AD99;
}

.first-badge{
    /* overflow: scroll; */
}
</style>