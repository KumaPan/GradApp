<template>
    <div class="container">
        <div class="row">
            <h2 class="text-center mt-5">Learning page</h2>
            <div class="col-md-12 d-flex justify-content-center">
                <div class="card text-center">
                    <div class="card-header">
                        #Name of Lesson
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Name of Video</h5>
                        <iframe width="1270" height="720" src="https://www.youtube.com/embed/F9MbApjZjII" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                        <p class="card-text">Supporting text, giving ontext to the video</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                    <div class="card-footer text-body-secondary">
                        <i>#Name of lecturer or author</i>
                    </div>
                    </div>
            </div>
            <div class="col-md-12 d-flex justify-content-center mt-5">
                <p>After learning about the subject you can go to practice</p>
                <p>Get to practicing</p>
            </div>
            <div class="col-md-12 d-flex justify-content-center">
                <router-link type="button" to="/practice/demo-page" class="btn btn-success">Practice</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoLearningPage'
}
</script>

<style>

</style>