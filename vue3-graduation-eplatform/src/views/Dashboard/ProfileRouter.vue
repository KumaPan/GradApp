<template>
     <div class="">
        <DashboardComponent />
        <router-link type="button" class="btn btn-warning mt-3" to="/dashboard/profile">Back</router-link>
        <div class="row justify-content-md-center mt-5">
            <div class="col-md-12 mb-3">
                
                <!-- <ProfileComponent /> -->
            </div>
        </div>
    </div>
</template>

<script>
import ProfileComponent from '@/components/layouts/ProfileComponent.vue';
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';


export default {
    name: 'ProfileRouter',

    components: {
        ProfileComponent,
        DashboardComponent,
    }
}
</script>