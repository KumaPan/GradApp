<template>
    <div class="container-fluid">
    
        <div class="row justify-content-md-center pb-5" id="bgColor1" style="height: 25rem;">
              <div class="d-flex ms-5">
                    <div class="col-md-6 mt-5 pe-5 justify-content-center">
                    <h1 class="text-white subheadingText">A great solution for your business!</h1>
                    <p class="insectionText"><b>Learning made easy.</b> Why take the long when there's a simple short cut right here, right now!</p>
                    
                    <router-link to="/sign-up" class="btn me-5" style="background-color: #06AD99;">Get started</router-link> 
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
                <div class="offer-box">
                    <h2 class="text-center headingText">What we offer</h2>
                    <!-- <hr>
                    <hr class="hrStyle"> -->
                    <p class="text-center insectionText">This application offeres a different range of services that companies and individuals alike can make use of.
                        Check out some of the following byt reading more on how it these services work.
                    </p>
                </div>
                <div class="col-md-3">
                    <div class="card mb-5 mt-5">
                        <div class="card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h5 class="card-title"><i class="bi bi-clipboard-check-fill" style="font-size: 2rem;"></i></h5>
                            <h4 class="card-subtitle mb-2 headingText">Planning</h4>
                            <p class="card-text">Learn how you can make plans with the path tool for product viability in this tough market</p>
                            <router-link to="#" type="button" class="btn mt-1" style="background-color: #06AD99">Read more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mb-5 mt-5">
                        <div class="card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h5 class="card-title"><i class="bi bi-pencil-square" style="font-size: 2rem;"></i></h5>
                            <h4 class="card-subtitle mb-2 headingText">Practice</h4>
                            <p class="card-text">Practice through repitition. Learn how you can apply what you learn from a different rangeof topics.</p>
                            <router-link to="#" type="button" class="btn mt-1" style="background-color: #06AD99">Read more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mb-5 mt-5">
                        <div class="card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h5 class="card-title"><i class="bi bi-gift-fill" style="font-size: 2rem;"></i></h5>
                            <h4 class="card-subtitle mb-2 headingText">Rewards with Gamification</h4>
                            <p class="card-text">It is a long established fact that a reader will be distracted by the readable content.</p>
                            <router-link to="#" type="button" class="btn mt-1" style="background-color: #06AD99">Read more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mb-5 mt-5">
                        <div class="card-body shadow-lg p-3 mb-5 bg-body rounded">
                            <h5 class="card-title"><i class="bi bi-info-square-fill" style="font-size: 2rem;"></i></h5>
                            <h4 class="card-subtitle mb-2 headingText">Informational content</h4>
                            <p class="card-text">It is a long established fact that a reader will be distracted by the readable content.</p>
                            <router-link to="#" type="button" class="btn mt-1" style="background-color: #06AD99">Read more</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" id="bgBland">
                <div class="col-md-12">
                    <div class="team-box  mt-5">
                        <h2 class="text-center headingText">The team behind </h2>
                        <p class="text-center insectionText">We have a dedicated team of individuals which share teh same vision that our customers do,
                            A vision to increase business revenue and brand loyalty. Meet some of the team members behind 
                            the project.
                        </p>
                    </div>
                        <div class="col-md-6">
                            <div class="card mb-3" id="teamCards">
                                <div class="row g-0">
                                    <div class="col-md-4 ps-3 mt-2">
                                    <img src="https://picsum.photos/id/22/150/200" class="personaImg" alt="random">
                                    </div>
                                    <div class="col-md-8 ps-5">
                                        <div class="card-body">
                                            <h5 class="card-title subheadingText">Insert your name here</h5>
                                            <p class="card-text insectionText">description of of the person you can put in here. for some reason i couldnt think up of anyone to put in here.</p>
                                            <h5 class="card-text insectionText"><b>Socials: </b><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i> <i class="bi bi-discord"></i> <i class="bi bi-linkedin"></i></h5 >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-3" id="teamCards">
                                <div class="row g-0">
                                    <div class="col-md-4 ps-3 mt-2">
                                    <img src="https://picsum.photos/id/22/150/200" class="personaImg" alt="random">
                                    </div>
                                    <div class="col-md-8 ps-5">
                                        <div class="card-body">
                                            <h5 class="card-title subheadingText">Insert your name here</h5>
                                            <p class="card-text insectionText">description of of the person you can put in here. for some reason i couldnt think up of anyone to put in here.</p>
                                            <h5 class="card-text insectionText"><b>Socials: </b><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i> <i class="bi bi-discord"></i> <i class="bi bi-linkedin"></i></h5 >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
            
            <div class="row" id="bgColor1">
                <div class="col-md-12">
                    <h2 class="text-center">Footer here inder the team</h2>
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
        font-weight: medium;
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

#floatingLogo{
    -webkit-animation: action 1s infinite  alternate;
    animation: action 1s infinite  alternate;
}

@-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

@keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

.hrStyle{
    border: 4px solid #ff9945;
     margin-top: -20px; 
     width: 50%; 
     z-index: auto;
     margin: auto;

}

.card {
height: 15rem;
width: 20rem;

}

.card:hover{
    height: 17rem;
    width: 22rem;
}
#teamCards{
width: 30rem;
}

.personaImg{
    /* border-radius: 25%; */
}
</style>