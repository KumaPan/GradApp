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
                            <table class="table ms-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Task</th>
                                        <th scope="col">Difficulty</th>
                                        <th scope="col">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td></td>
                                    <td></td>
                                    <th></th>
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
                                    <p>Level experience - </p>
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


export default {
    name: 'TrackingComponent',

    data(){
        return {
            barValue:"20%"
        }
    }
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