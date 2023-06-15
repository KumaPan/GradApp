<template>
    <div class="container">
        <div class="d-flex" v-for="lead in leads" v-bind:key="lead.id">
            <router-link :to="{ name: 'ProfileRouter', params: { id:lead.id }}"  class="btn btn-warning mt-3" type="button">Back to No. {{ lead.id }}</router-link> 
        </div>
        <div class="row justify-content-md-center mt-5">
            <div class="col-md-12 mb-3">
                <h2>Personal information</h2>
                <router-link to="/dashboard/leads/add" type="button" class="btn btn-primary">Add Info</router-link>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lesson</th>
                            <th scope="col">Contact person</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="lead in leads"
                        v-bind:key="lead.id"
                        >
                            <th scope="row">1</th>
                                <td>{{ lead.lesson }}</td>
                                <td>{{ lead.contact_person }}</td>
                                <td>{{ lead.status }}</td>
                        </tr>
                        <!-- <tr>
                            <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'Leads',
    data(){
        return{
            leads:[]
        }
    },
    mounted(){
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