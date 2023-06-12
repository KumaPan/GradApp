<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-12">
                <h2>Product planning page</h2>
                <form @submit.prevent="submitForm">
                    <div class="col-md-6">
                       <div class="mt-3">
                            <label for="ProductName" class="form-label">Product name</label>
                            <input type="text" class="form-control" v-model="product_name">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">What is the function of the product or service?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="product_function">                            
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">What kinda of packaging will the product need?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="product_packaging">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">Describe the quality for the product or service your aiming for.</label>
                            <!-- <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button> -->
                            <!-- <input type="text" class="form-control"> -->
                            <textarea class="form-control" cols="30" rows="5" v-model="product_quality"></textarea>
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">What service do you intend to provide for your customers?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="product_service">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">Will the company or business cover warranty or other cost of the product or service?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Yes
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck">
                                    <label class="form-check-label" for="invalidCheck">
                                        No
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">What is your brand name?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="brand_name">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">Describe you brand and its quailities?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="brand_description">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">What is the design of the product or service?</label>
                            <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button>
                            <input type="text" class="form-control" v-model="product_design">
                       </div>
                       <div class="mt-3">
                            <label  class="form-label">Describe in detail what you envision for your product of service?</label>
                            <!-- <button class="btn btn-light btn-sm m-1"><i class="bi bi-plus-circle"></i></button> -->
                            <!-- <input type="text" class="form-control"> -->
                            <textarea class="form-control" cols="30" rows="5"></textarea>
                       </div>
                    </div>
                    <button class="btn btn-primary mt-3">Sumbit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductionInformation',

    data(){

        return {
        leads:{},

        brand_description: '',
        brand_name:'',
        product_name:'',
        product_function:'',
        product_packaging: '',
        product_quality:'',
        product_service:'',
        product_design:'',

        //FIELD REQUIRED
        // contact_person: this.contact_person,
        // email: this.email,
        // phone: this.phone,
        // website: this.website,
        }
    },

    methods: {
        submitForm(){
            console.log('this form has been handed in')
            console.log('this is the person',this.contact_person)

            const lead = {
                brand_description: this.brand_description,
                brand_name: this.brand_name,
                product_name: this.product_name,
                product_function: this.product_function,
                product_packaging: this.product_packaging,
                product_quality: this.product_quality,
                product_service: this.product_service,
                product_design: this.product_design,
                // contact_person: this.contact_person,
                // email: this.email,
                // phone: this.phone,
                // website: this.website,
            }
            axios
                    .post('/api/v1/leads/', lead)
                    .then(response =>{
                        console.log(response)

                        this.$router.push('/learning/path-tool')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            
        }
    }
}
</script>

<style>

</style>