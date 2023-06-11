<template>
     <div class="">
        <DashboardComponent />
        <div class="row justify-content-md-center">
            
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