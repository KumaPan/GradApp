<template>
    <div class="container-fluid">
    
        <div class="row justify-content-md-center pb-5" id="bgColor1" style="height: 25rem;">
              <div class="content-container">
                    <div class="col-auto mt-5 pe-5 justify-content-center">
                    <h2 class="text-white subheadingText">A great solution for your business!</h2>
                    <p class="insectionText"><b>Learning made easy.</b> Why take the long when there's a simple short cut right here, right now!</p>
                </div>
                <div class="col-auto mt-5 pb-5 ms-5">
                    <!-- <img src="https://picsum.photos/id/8/600/400" alt=""> -->
                </div>
              </div>  
        </div> 

        <div class="row">
            <div class="col-md-12" id="bgBland" style="height: 7rem;">
                <h2 class="text-center headingText" >Supporting Businesess</h2>
                <div class="d-flex justify-content-center">
                    <!-- <img src="@/assets/images/123tcslogo.png" alt="tcs" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/ccvlogo.png" alt="ccv" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/ccvshoplogo.png" alt="ccv-shop" style="height: 100%; width: 100%;"> -->
                    <!-- <img src="@/assets/images/rabobanklogo.png" alt="rabo" style="height: 100%; width: 100%;"> -->
                </div>
            </div>
        </div>
    

        
            <div class="row justify-content-md-center" id="bgColor2">
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
    color: white;
    font-size: medium;
}
</style>