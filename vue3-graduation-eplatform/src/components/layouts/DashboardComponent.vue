<template>
    <div class="">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="background-color: #0C8F7F">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/dashboard/profile" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Dashboard</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0 text-white">
                            <i class="bi bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-clipboard"></i> <span class="ms-1 d-none d-sm-inline">Overview</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-bar-chart-line-fill"></i><span class="ms-1 d-none d-sm-inline">Progression</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-people-fill"></i><span class="ms-1 d-none d-sm-inline">Team members</span></a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-info-circle"></i> <span class="ms-1 d-none d-sm-inline">Feedback</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-white">
                            <i class="bi bi-gear"></i> <span class="ms-1 d-none d-sm-inline">Settings</span> </a>
                    </li>
                </ul>
                <hr>
            </div>
        </div>
        <div class="col py-3">
            <router-link type="button" class="btn btn-warning mt-3" to="/">Back</router-link>
            <ProfileComponent />
        </div>
    </div>
</div>
</template>

<script>

import ProfileComponent from '@/components/layouts/ProfileComponent.vue';

export default {
    name: 'DashboardComponent',
 
    
    components: {
        ProfileComponent
    }
}
</script>

<style>

</style>