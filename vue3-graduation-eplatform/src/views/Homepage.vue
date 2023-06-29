<template>
    <div class="container-fluid">
    
        <div class="row justify-content-md-center pb-5" id="bgColor1" style="height: 25rem;">
              <div class="d-flex ms-5">
                    <div class="col-md-6 mt-5 pe-5 justify-content-center">
                    <h2 class="text-white subheadingText">A great solution for your business!</h2>
                    <p class="insectionText"><b>Learning made easy.</b> Why take the long when there's a simple short cut right here, right now!</p>
                    
                    <button class="btn me-5" style="background-color: #06AD99;">Get started</button>
                    <a class="" href="#" type="button" id="vidLink"><i class="bi bi-play-circle-fill"></i> What is this all about?</a>
                </div>
                <div class="col-md-6 pb-5 ms-5" id="floatingLogo">
                    <img src="@/assets/images/isometric-business.png" alt="business-iso" style="height: 25rem; width: 30rem;">
                </div>
              </div>  
        </div> 

        <div class="row">
            <div class="col-md-12" id="bgBland" style="height: 7rem;">
                <h2 class="text-center headingText" >Supporting Businesess</h2>
                <p class="text-center">Honorable supporters</p>
                <div class="d-flex justify-content-center">
                    <!-- <img src="@/assets/images/123tcslogo.png" alt="tcs" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/ccvlogo.png" alt="ccv" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/ccvshoplogo.png" alt="ccv-shop" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/rabobanklogo.png" alt="rabo" style="height: 100%; width: 100%;"> -->
                </div>
            </div>
        </div>
    

        
            <div class="row justify-content-md-center" id="">
                <h2 class="text-center headingText">About</h2>
                <div class="col-md-6" >
                <h4 class="subheadingText">The Application</h4>
                <p class="insectionText text-start">The<b> E-Marketing app</b> was created to aid businesses in successful creation of products
                and the development of their brand. By looking at smaller parts using the four p's of marketing matrix
                and use of gamification methods, this tools will supply that motivaton needed to go on.
                </p>
                <p class="insectionText">Here is a list of features to expect</p>
                <p class="insectionText"><i class="bi bi-clipboard-check-fill"></i> Planning</p>
                <p class="insectionText"><i class="bi bi-keyboard-fill"></i> Pracice</p>
                <p class="insectionText"><i class="bi bi-info-circle-fill"></i> Informational content</p>
                <p class="insectionText"><i class="bi bi-joystick"></i> Gamification elements and rewards</p>
                <p class="insectionText"><i class="bi bi-people-fill"></i> Team setup</p>
                </div>

                <div class="col-md-6" >
                <h4 class="subheadingText">The company behind it</h4>
                <p class="insectionText text-start">Here at <b>Actablue</b>, we create software sollutions for retail and wholesale companies. These
                sollutions aim to simplify the way people work or take out the miscelaneous procesess. We prodive many other services
                as well besides software sollutions. 
                </p>
                <a href="#" type="button" class="btn btn-info" style>Learn more</a>
                </div>
            </div>
            
            <div class="row" id="bgColor1">
                <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>

    
        

    </div>
</template>

<script>
import Homepage from '../views/Homepage.vue'

export default{
    name: 'Homepage',
    components:{
        Homepage
    }
}
</script>

<style scoped>
   #bgColor1{
        background-color: #048171;
    }
   #bgColor2{
    background-color: #06AD99;
    }
    #bgBland{
        background-color: rgb(236, 236, 236);
    }

    #subject{
        text-align: center;
    }
    
   
    /* .leftTxt{
       text-align: left;
       position: absolute;
       left: auto;
    } */

    .headingText{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #152238;
        /* font-weight: bold; */
    }

    .subheadingText{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #152238;
    }

.insectionText{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #152238;
    font-size: light;
}

.btn{
    border-radius: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
}

#vidLink{
    text-decoration: none;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>