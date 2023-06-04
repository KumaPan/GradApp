<template>
    <div class="">
        <div class="continater mt-5">
            <form action="">
            <h2>Pre-Selection lesson section</h2>
            <div class="row mt-5 ms-3">
                <h5>What subject would you like to learn?</h5>
                    <div class="col-md-8">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose an option</option>
                            <option value="1">HTML/CSS</option>
                            <option value="2">Frameworks</option>
                            <option value="3">Responsive Design</option>
                            <option value="4">Problem solving</option>
                            <option value="5">Testing & Debugging</option>
                        </select>
                    </div>
            </div>

            <div class="row mt-5"><h2>Pre-Selection Goal tracking </h2></div>
                <div class="row " id="second">
                    <div class="col-md-6 text-white mt-3 ms-3" id="insideBox">
                        <h5>How much do you know about this chosen subject</h5>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose an option</option>
                            <option value="1">Very little</option>
                            <option value="2">Moderate amount</option>
                            <option value="3">Expert level </option>
                        </select>

                        <div class="mt-5">
                        <h5>How many lessons do you want to take a day?</h5>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose an option</option>
                            <option value="1">3 lessons a day</option>
                            <option value="2">4 lessons a day </option>
                            <option value="3">6 lessons a day</option>
                        </select>
                    </div>
                    <router-link to="/dashboard/lessons" type="submit" class="btn btn-primary mt-3">Submit</router-link>
                    </div>
                </div>
            </form>
        </div>
        
      
    

        <!-- <div class="mt-5"><h2>Progressions</h2></div>
        <section class="container-fluid" id="third">
            <div class="row" id="insideBoxTwo">
                
            </div>
        </section>
        <footer>

        </footer> -->
    </div>    
</template>

<script>

export default {
    name: 'LessonPrechoice',

    data(){
        return {
            html_css: '',
            responsive_design:'',
            problem_solving:'',
            testing_debuggin: '',
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

/* #insideBox{
    background-color:#06AD99 ;
    height: 450px;
    width: 1500px;
    margin-left:300px ;
} */

#insideBoxTwo{
    background-color: #06AD99;
    height: 450px;
    width: auto;
    margin-left: 200px;
    margin-right: 200px;
}
</style>