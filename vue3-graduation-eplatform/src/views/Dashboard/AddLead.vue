<template>
    <div class="container">
    <div class="row justify-content-md-center mt-5">
       
        <div class="col-md-12 mb-3">
            <h2>Add Info</h2>
        </div>

        <div class="col-md-12 mb-3">
            <form @submit.prevent="submitForm">
                <div class="col-md-6 pb-3">
                    <h5>Personal information</h5>
                    <div class="mb-3">
                            <label class="form-label">Full name</label>
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
                            <label for="biography" class="form-label">Description of yourself</label>
                            <textarea class="form-control" id="biography" cols="30" rows="3" v-model="bio"></textarea>
                    </div>
                </div>

                <div class="col-md-6">
                    <h5>Company information</h5>
                    <div class="mb-3">
                            <label class="form-label">Work website</label>
                            <input type="text" class="form-control" v-model="website">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Company goals & Aspiriation</label>
                            <textarea class="form-control" id="biography" cols="30" rows="3" placement="Example - In our company we aspire to connect with our target audience" v-model="goals"></textarea>
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Keyword</label>
                            <input type="text" class="form-control" placeholder="Example - omnichannel" v-model="keyword">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Team member name</label>
                            <input type="text" class="form-control" v-model="team_members">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Starting points</label>
                            <input type="number" class="form-control" placeholder="0" v-model="points" disabled>
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Starting Level</label>
                            <input type="number" class="form-control" placeholder="0" v-model="points" disabled>
                    </div>
                    
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
                    <!-- <div class="col-md-3 mb-3">
                        <label class="form-label">Lesson</label>
                            <select class="form-select" aria-label="Select lesson status" >
                                <option selected>Choose below</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="hi3gh">3</option>
                            </select>
                    </div> -->
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
                goals: '',
                keyword: '',
                bio: '',
                team_members: '',
                points: 0,
                level_exp:0,


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
                    website: this.website,
                    bio: this.bio,
                    goals: this.goals,
                    keyword: this.keyword,
                    team_members:this.team_members,
                    points:this.points,
                    level_exp:this.level_exp
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

<style  scoped>

/* .container{
    background-color: white;
} */
</style>