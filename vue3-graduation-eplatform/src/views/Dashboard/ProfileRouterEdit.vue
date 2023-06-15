<template>
    <div class="container">
        <div class="row justify-content-md-center mt-5">
            <div class="col-md-12 mb-3">
                <h2>Personal information</h2>
            </div>

            <div class="col-md-12 mb-3">
                <form @submit.prevent="submitForm">
                <div class="col-md-6 pb-3">
                    <h5>Personal information</h5>
                    <div class="mb-3">
                            <label class="form-label">Full name</label>
                            <input type="text" class="form-control" v-model="lead.contact_person">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="lead.email">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" class="form-control" v-model="lead.phone">
                    </div>
                    <div class="mb-3">
                            <label for="biography" class="form-label">Description of yourself</label>
                            <textarea class="form-control" id="biography" cols="30" rows="3" v-model="lead.bio"></textarea>
                    </div>
                </div>

                <div class="col-md-6">
                    <h5>Company information</h5>
                    <div class="mb-3">
                            <label class="form-label">Work website</label>
                            <input type="text" class="form-control" v-model="lead.website">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Company goals & Aspiriation</label>
                            <textarea class="form-control" id="biography" cols="30" rows="3" placement="Example - In our company we aspire to connect with our target audience" v-model="lead.oals"></textarea>
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Keyword</label>
                            <input type="text" class="form-control" placeholder="Example - omnichannel" v-model="lead.keyword">
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Team member name</label>
                            <input type="text" class="form-control" v-model="lead.team_members">
                    </div>
                    
                </div>
                    <div class="col-md-3 mb-3">
                        <label class="form-label">Status</label>
                            <select class="form-select" aria-label="Select lesson status" v-model="lead.status">
                                <option selected>Open this select menu</option>
                                    <option value="new">New</option>
                                    <option value="inprogress">Inprogress</option>
                                    <option value="incomplete">Incomplete</option>
                                    <option value="completed">Completed</option>
                            </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label class="form-label">Priority</label>
                            <select class="form-select" aria-label="Select lesson status" v-model="lead.priority">
                                <option selected>Open this select menu</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                            </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
            </form>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
name: 'ProfileRouterEdit',

data(){
    return {
        lead: {}
    }
},
mounted(){
        this.getLead()
    },

    methods:{
              getLead(){
            this.$store.commit('setIsLoading', true)
            
            const profileID = this.$route.params.id

            axios
                .get(`/api/v1/leads/${profileID}/`)
                .then( response => {
                    console.log(response)
                    this.lead = response.data
                }) 
                .catch(error =>{
                    console.log(error)
                })           
            
            
            this.$store.commit('setIsLoading', false)


        }
    }
}
</script>

<style>

</style>