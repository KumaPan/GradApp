<template>
    <div class="container">
        <form class="row justify-content-md-center g-3  mt-5" @submit.prevent="submitForm">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" v-model="username">
            </div>
            <div class="col-md-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword" v-model="password">
            </div>
            <div class="col-md-3">
              <label for="inputPassword1" class="form-label">Repeat Password</label>
              <input type="password" class="form-control" id="inputPassword1" v-model="password1">
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Veitorian Straat" v-model="address">
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Addition</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor number" v-model="addition">
            </div>
            <div class="col-md-8">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity" v-model="city">
            </div>
            <div class="col-md-4">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" v-model="zipcode">
            </div>
            <div class="col-md-12">
              <label for="inputOccupation" class="form-label">Occupation</label>
              <input type="text" class="form-control" id="inputOccupation" v-model="occupation">
            </div>
             <!-- <div class="col-md-6">
              <label for="inputState" class="form-label">Subject interst</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option value="1">Front-end topic 1</option>
                  <option value="2">Front-end topic 2</option>
                  <option value="3">Front-end topic 3</option>
                </select>
            </div> -->           
              
                  <div class="col-md-3">
                      <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errors.length">
                        <strong>Warning!</strong> <p class="text-black" v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  </div>
            

                  
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios'
import { Toast } from 'bootstrap'
// import { response } from 'express'

export default{
    name: 'Sign-up',
    data(){
      return {
        username: '',
        password:'',
        password1: '',
        address:'',
        addition:'',
        zipcode:'',
        city:'',
        occupation:'',
        errors:[],
       
      }
    },

    methods: {
      submitForm(){
        this.errors = []
        console.log('submitted')

        if (this.username === ''){
            this.errors.push('The username is missing')
        }
        if (this.password === ''){
            this.errors.push('The password is too short')
        }
        if (this.password !== this.password1){
          this.errors.push('The password does not match')
        }
        if (this.address === ''){
          this.errors.push('Do you not Live anywhere?')
        }
        if (this.addition === ''){
          this.errors.push('This field is missing')
        }
        if (this.zipcode === ''){
          this.errors.push('This field cannot be empty')
        }
        if (this.city === ''){
          this.errors.push('This field cannot be empty')
        }
        if (this.occupation === ''){
          this.errors.push('This field is missing')
        }
        
        if (!this.errors.length){
          const formData = {
            username: this.username,
            password: this.password1
          }
          axios
          .post('/api/v1/users/', formData)
          .then(response => {
              // Toast({
              //   duration: 2000,
              //   pauseOnHover
              // })
              this.$router.push('/login')
          }) 
          .catch(error => {
            if(error.response){
              for (const property in error.response.data)
                this.errors.push(`${property}: ${error.response.data[property]}`)
            } else if(error.message){
              this.errors.push('Something went wrong. Pleaser try again!')
            }
          })
        }       
      } 
    }
}
</script>

<style>
  body{
    background-color: white !important; 
  }
</style>