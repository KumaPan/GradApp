<template>
  <div class="container">
    <form class="row justify-content-md-center mt-5" @submit.prevent="submitForm">
      <div class="col-md-8 mb-3">
        <label for="formGroupExampleInput" class="form-label">Email</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example: Youremailgood@something.com" v-model="username">
      </div>
      <div class="col-md-8 mb-3">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="" v-model="password">
      </div>

      <div class="alert alert-warning alert-dismissible fade show" v-if="errors.length">
          <p class="text-black" v-for="error in errors" v-bind:key="error">{{ error }}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <div class="col-md-8">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'

    export default{
        name: 'Login',
        data(){
      return {
        username: '',
        password:'',
        errors:[]
        }
      },

      methods:{
        submitForm(){
          // this.$store.commit('setIsLoading', true)
          console.log('submit login')
          axios.defaults.headers.common['Authorization'] = ''
          localStorage.removeItem('token')

          const formData = {
            username: this.username,
            password: this.password
          }

             axios
            .post('/api/v1/token/login/', formData)
            .then(response => {
              const token = response.data.auth_token

              this.$store.commit('setToken', token)

              axios.defaults.headers.common['Authorization'] = 'Token ' + token

              localStorage.setItem('token', token)

              this.$router.push('/dashboard/')
            })
            .catch(error =>{
            if(error.response){
              for(const property in error.response.data){
                this.errors.push(`${property}: ${error.response.data[property]}`)
              }
            } else if (error.message){
              // this.$router.push('/login')
              this.errors.push('Something went wrong. Please try again')
            }
          })
          // this.$store.commit('setIsLoading', false)
        }
      }
    }
</script>