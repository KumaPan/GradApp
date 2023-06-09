<template>
    <div class="">
        <div class="continater mt-5">
            <div class="row p-3">
                <h2 class="text-center">Courses(or Paths)</h2>
                <hr>
                <h5 class="">Omnichannel categories & the 4 P's</h5>
                <div class="col-md-3">
                    <div class="card">
                        <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Product</h5>
                            <p class="card-text">
                                Find out how you can take your product to the next level. This course aims to provide information
                                and guidance for the Place of your product within the market.
                            </p>
                            <a href="/omnichannel/product" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card">
                        <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Price</h5>
                            <p class="card-text">
                                Your product might not be the only one in the market. Affordability and price range is importnat,
                                Learn how to chaange your product for your competitors.
                            </p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card">
                        <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Place</h5>
                            <p class="card-text">
                                Constomer shopping habits. Learn how you to be aware of these and how having 
                                a dedicated Team can help with product placement and distribution.
                            </p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card">
                        <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Promotion</h5>
                            <p class="card-text">
                                Informing & Advertisements. Key methods to spreading the word of your product to the masses.
                                Learn how to plan the right approaches to product promotion 
                            </p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <hr class="mt-5">

                <h5>Coming soon...</h5>
                <div class="col-md-3">
                    <div class="cardTBD">
                            <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Omnichannel & Frontend practicing</h5>
                                <p class="card-text">
                                    Informing & Advertisements. Key methods to spreading the word of your product to the masses.
                                    Learn how to plan the right approaches to product promotion 
                                </p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
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

.card{
    width: 25rem;
    height: 30rem;
    border: none;
    background-color: rgb(238, 238, 238);
}
.cardTBD{
    width: 25rem;
    height: 30rem;
    border: none;
    background-color: rgb(238, 238, 238);
    opacity: 75%;
}
</style>