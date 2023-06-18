<template>
    <div class="" >
        <h4 class="text-center mt-4">Tracker</h4>
        <div class="bothSides" >
            <div class="d-flex ms-3 mb-3">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-success btn-sm">Tracking</button>
                    <button type="button" class="btn btn-success btn-sm">Progression</button>
                </div>
            </div>
            <div class="tracking-box">
                <p><b>Completed task</b></p>
                <div class="completed-task">
                    <div class="row">
                        <div class="col-md-8">
                            <table class="table table-bordered ms-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Task</th>
                                        <th scope="col">Difficulty</th>
                                        <th scope="col">Points</th>
                                        <th scope="col">Claim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(task, index) in tasks" :key="index">
                                        <td>{{ task.name }}</td>
                                        <td>
                                            <span class=""
                                            :class="{'text-danger': task.difficulty==='hard',
                                                    'text-warning': task.difficulty==='medium',
                                                    'text-success': task.difficulty==='easy'}">
                                                {{ firstCharUpper(task.difficulty) }}
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                {{ task.points }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="text-center" @click="earnReward(index)">
                                                <span class="pointer fa-solid fa-check-to-slot"></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-3">
                            <div class="graph-progress">
                                <div class="graph-text">
                                    <p><b>Progress Bar</b></p>
                                <i class="bi bi-person-circle" style="font-size: 5rem;"></i>
                                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" :style="barValue"></div>
                                </div>
                                    <p><b>Beginner</b></p>
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
import { Bounce, Flip, toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'TrackingComponent',

    data(){
        return {
            barValue:"20%",
            tasks: [
                {
                    name: 'Steal diploma and run for the hills',
                    status: 'to-do',
                    difficulty: 'hard',
                    points:'3 pts'    
                },
                {
                    name: 'Finish this project for grad',
                    status: 'in-progress',
                    difficulty: 'hard',
                    points:'3 pts'
                },
                {
                    name: 'Create analysis list of competition for coproration',
                    status: 'in-progress',
                    difficulty: 'medium',
                    points:'2 pts'
                },
                {
                    name: 'Make prints for boss, hand out fliers infron the store',
                    status: 'in-progress',
                    difficulty: 'easy',
                    points:'1 pts'
                },
            ],
            difficultyList:['easy', 'medium', 'hard'],
        }
    },

    props: ['names'],

    components:{
        
    },

    methods: {
        infoGet(){
            console.log('this is the tasks name', this.names)
        },
        firstCharUpper(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        deleteTask(index){
            this.tasks.splice(index, 1);

        }, earnReward(index){
            this.barValue = "20%"

            this.tasks.splice(index, 1);
            this.barValue="50%"

            toast.success('Congradulation, youve earned some experience!', {
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_CENTER,
                transition: Bounce,
                theme: 'colored'
            });
        },
    },
}
</script>

<style>
    .tracking-box{
        background-color: rgb(255, 255, 255);
        height: 22em;
        width: 70rem;
        display: block;
        margin: auto;
        border-radius: 25px 25px;
        box-shadow: -5px 5px #06AD99;
    }
    .graph-progress{
        position: absolute;
        /* right: 350px; */
        width: 300px;
        height: 250px;
        padding: 10px;
        background-color: #06AD99;
        border-radius: 25px 25px;
    }

    .progress-bar{
        width: v-bind(barValue);
    }
/* code for progress bar */

  
</style>