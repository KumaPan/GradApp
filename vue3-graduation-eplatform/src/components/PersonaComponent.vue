<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="profile-card text-center">
                    <div class="card-img-top"><i class="bi bi-person-circle" style="font-size: 10rem;"></i></div>
                        <div class="card-body" v-for="lead in leads"
                        v-bind:key="lead.id">
                            <h5 class="card-title">{{ lead.contact_person }}</h5>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 10rem;">
                                <div class="progress-bar" :style="[width, backgroundColor]"></div>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="d-grid gap-1">
                                <a href="#" class="games " style="color: #0C8F7F;" @click="togglefirstClass()">Bagdes</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;" @click="togglesecondClass()">Leaderboard</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;" @click="togglethirdClass()">Stats</a>
                            </div>
                        </div>
                </div>
            </div>
            
            <div class="col-md-6" :class="{'d-none': isDropdownHidden}">
                    <div class="card gameTime" style="width: 30rem; height: 25rem;">
                        <div class="card-body">
                            <h5 class="card-title"><b>{{ badges }}</b></h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                Inside box
                        </div>
                    </div>
            </div>

            <div class="col-md-6" :class="{'d-none': isDropdownHidden2}">
                <div class="card gameTime" style="width: 30rem; height: 25rem;">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{ leaderboard }}</b></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        Inside box
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
            width:'width: 10%',
            backgroundColor:'background-color:#0C8F7F',
            badges:'Badges',
            leaderboard:'Leaderboard',
            stats: 'Stats',
            isDropdownHidden: true,
            isDropdownHidden2: true,
            isDropdownHidden3: true,
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
</style>