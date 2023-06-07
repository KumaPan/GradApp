<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="profile-card text-center">
                    <div class="card-img-top"><i class="bi bi-person-circle" style="font-size: 10rem;"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Insert name here with link</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="d-grid gap-1">
                                <a href="#" class="games " style="color: #0C8F7F;">Bagdes</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;">Leaderboard</a>
                                <a href="#" class="games" style="color: #0C8F7F; opacity: 50%;">Stats</a>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" style="width: 30rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
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
    background-color:#FAF9F6;
}
</style>