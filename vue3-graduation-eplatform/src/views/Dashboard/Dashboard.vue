<template>
    <div class="container">
        <div class="row mt-5">
            <h1 class="text-center">Welcome</h1>
            <img src="https://picsum.photos/id/972/600/400" class="card-img-top" alt="">
                <div class="col-md-12 mb-3 mt-5">
                       <h3>What this platform is about?</h3>
                    <p>This platform aims to provides to assitast in two diffent areas:</p>
                    <p><b>Firstly</b> - The business side</p>
                    <p>The businesses from actable has issues with its Frontend design causes errors on there website leading to
                        problems on the website like broken links, missing text and so on. 
                    </p>
                    <p><b>The sollution</b></p>
                    <p>Part of this app aims to satisfy the planning in the 4ps of the omnichannel. By breaking down the different parts for each
                        P in the omnichannel design, we are able to incoporate tools to help keep track of specifications for the product. Some of the specifications
                         kept on track are the Branding, the Product itself and Warranty. Each category is seperated into its own space to then make a check list of
                         items need to be completed. These list are set by the company. 
                    </p>

                    <hr>

                    <p><b>Secdonly</b> - The frontend side</p>
                    <p>The businesses struggled with keeping there website structure which reflected on poor web design choices or other interenal/external problems.
                        After an interview with the target group, having to manage a webshop and a store is hard to juggle while cost of fixing the problems can
                        run very high. So, instead of having the managing the content itself, informaing the group on better design choices and allowing them to practice 
                        was the sollution for this side.
                    </p>
                    <p><b>What can you do?</b></p>
                    <p>From going to the profile page where you put in your information you can enter in keywords for changing the content to what the keyword matches.
                        this way the content itself is dynamic and you can set it to what you want to learn right away.
                    </p>

                    <h4>Lets get started</h4>
                    <p>Head to the profile page and click on edit profile.</p> 
                    <div  class="d-flex justify-content-center">
                        <router-link to="/dashboard/profile/:id" class="btn btn-primary">Profile</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'Dashboard',

    data(){
        return {
            leads: [],
        }
    },

    mounted (){
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
        }
    }
}
</script>

<style scoped>
.card-img-top {
    height: 400px;
    width: 600px;
    margin: auto;
}
</style>