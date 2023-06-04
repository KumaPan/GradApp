<template>
    <div class="container">
    <div class="row justify-content-md-center mt-5">
       
        <div class="col-md-12 mb-3">
            <h2>Add Info</h2>
        </div>

        <div class="col-md-12 mb-3">
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                        <label class="form-label">Contact person</label>
                        <input type="text" class="form-control" v-model="contact_person">
                </div>
                <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" v-model="phone">
                </div>
                <div class="mb-3">
                        <label class="form-label">Work website</label>
                        <input type="text" class="form-control" v-model="website">
                </div>
                <div class="col-md-3 mb-3">
                    <label class="form-label">Status</label>
                         <select class="form-select" aria-label="Select lesson status" v-model="status">
                            <option selected>Open this select menu</option>
                                <option value="new">New</option>
                                <option value="inprogress">Inprogress</option>
                                <option value="incomplete">Incomplete</option>
                                <option value="completed">Completed</option>
                        </select>
                </div>
                <div class="col-md-3 mb-3">
                    <label class="form-label">Priority</label>
                         <select class="form-select" aria-label="Select lesson status" v-model="priority">
                            <option selected>Open this select menu</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                        </select>
                </div>
                <div class="col-md-3 mb-3">
                    <label class="form-label">Lesson</label>
                         <select class="form-select" aria-label="Select lesson status" >
                            <option selected>Choose below</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="hi3gh">3</option>
                        </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'AddLead',
        data(){
            return {
                // lesson: '',
                contact_person: '',
                email:'',
                status: 'new',
                priority:'medium',
                phone:'',
                website:'',

            }
        },

        methods: {
            submitForm(){
                console.log('submit form')
                const lead = {
                    contact_person: this.contact_person,
                    email: this.email,
                    priority: this.priority,
                    status: this.status,
                    phone: this.phone,
                    website: this.website
                }

                axios
                    .post('/api/v1/leads/', lead)
                    .then(response =>{
                        console.log(response)

                        this.$router.push('/dashboard/leads')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>