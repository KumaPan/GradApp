<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-12">
                <h2>Product</h2>
                <div class="overview">
                    What is the product? I it a specific product? What does the product aim to accomplish?
                    Does it fullfill a need or provide a unique experience? Who is the target? How does it
                    differentiate from its competitors?
                </div>
                <div class="marketing">
                    <p>
                        Marketing mix is the combination of diffrent marketing decisions used by the firm & company
                        to market its goods and services. It is grouped under the four P's, Product, Price, Place, and
                        Promotion. With the decision in place, the company can create a set of controllable variables 
                        that can be used to influence buyers responses. A marketing manager helps in this part to and 
                        is responsible for deceiding the marketing expenditure in order to acheive the marketing objectives 
                        of the firm after finalizing the market budget.
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <p> Marketing decisions are categorized under the four P's in following table below</p>
                <div class="four-table">
                    <h4>Marketing categories example</h4>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Place</th>
                                <th scope="col">Promotion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Design</td>
                                <td>Technology</td>
                                <td>Usefulness</td>
                                <!-- <td>Value</td>
                                <td>Convenience</td>
                                <td>Quality</td> -->
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Details</td>
                                <td>Wholesale</td>
                                <td>Internet</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Special offers</td>
                                <td>Endorsements</td>
                                <td>Advertising</td>
                                <!-- <td>User trials</td> -->
                                <!-- <td>Direct mailing</td>
                                <td>leaflets & posters</td> -->
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Strategies</td>
                                <td>Skining</td>
                                <td>Penatration???</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-12">
                <div class="exercise">
                    <h2>Product</h2>
                    <p> One of the most valuable parts of the marketing matrix, the product refers to the physical
                        product or service for the consumer to pay. It often refers to the tangible goods for example like grocery items,
                        and furniture or intangible products like services.
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <h4>Product excercise</h4>
                <p class="small">Try this exercise</p>
                <p class="">In the following table there are some other marketing deceisions that could be done under the four P's.
                    Try the following excerise by choosing what other decisions can be a part of the Product matrix.
                </p>
                <form class="" @submit.prevent="submitForm">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="value">
                        <label class="form-check-label" for="flexCheckDefault">
                            Value 
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="quality">
                        <label class="form-check-label" for="flexCheckChecked">
                            Quality
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="direct_mailing">
                        <label class="form-check-label" for="flexCheckChecked">
                            Direct mailing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="convenience">
                        <label class="form-check-label" for="flexCheckChecked">
                            Convenience
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="begging_bartering">
                        <label class="form-check-label" for="flexCheckChecked">
                            Begging and bartering
                        </label>
                    </div>
                    <button class="btn btn-primary" id="liveToastBtn" @click="showPoints()">Submit</button>
                </form>
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <!-- <img src="..." class="rounded me-2" alt="..."> -->
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                        <div class="toast-body">
                             Hello, world! This is a toast message.
                        </div>
                </div>
            </div>

            <div class="col-md-12">
                <h2>What this path is about?</h2>
                <p>This path goes over what the important aspects of the product among the four p's are.
                    Plan everything along a checklist of items going through the products existence within the market.
                </p>
                <router-link class="btn btn-primary" to="/product-information/product">Start Planning</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios'
export default {
    name: 'Product',

    data (){
        return {
            // answers: {},
            quality:'',
            direct_mailing:'',
            convenience:'',
            begging_bartering:'',
            points: 1,
            value: ''
        }
    },

    // mounted(){
    //     this.getLeads()
    // },

    methods: {
        submitForm(){
            
            // const answers = {
            // quality: this.quality,
            // direct_mailing: this.direct_mailing,
            // convenience: this.convenience,
            // begging_bartering: this.begging_bartering
            // }

            if(this.quality){
                console.log('this is checked')
            }
        },
        showPoints(){
            console.log('this is showed')
            // const reward = {
            //     points: this.points
            // }
            if(this.value && this.quality && this.convenience === true){

                toast.success('You have completed the example and earned a Badge! Head to profile to see your badge.', {
                autoClose: 6000,
                position: toast.POSITION.BOTTOM_CENTER
            });

            } else if(this.value && this.quality === true) {
                toast.warning('Very close, missing one more!', {
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_CENTER
            });

            } else{
                toast.error('Wrong try again!', {
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_CENTER
            });

            }
            

           

            // axios
            //     .get('/api/v1/leads/', reward)
            //     .then(response=>{
            //         this.leads = response.data
            //     })

            //     .catch(error =>{
            //         console.log(error)
            //     })
            // console.log('this is points', this.points)
        },
    }
}
</script>

<style>
.overview{
    padding: 1rem;
}

.marketing{
    padding: 1rem;
}

.four-table{
    padding: 1rem;
}
</style>
