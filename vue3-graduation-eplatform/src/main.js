import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'


// import CanvasJS from '@canvasjs/charts';

import './assets/Style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

axios.defaults.baseURL ='http://127.0.0.1:8000'

library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router, axios)
.mount('#app')


import "bootstrap/dist/js/bootstrap.js"
