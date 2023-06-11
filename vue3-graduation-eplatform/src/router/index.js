import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


import HomeView from '../views/HomeView.vue'
import Homepage from '../views/Homepage.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import TestPage from '../views/TestPage.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Profile from '../views/Dashboard/Profile.vue'
import Leads from '../views/Dashboard/Leads.vue'
import Lessons from '../views/Dashboard/Lessons.vue'
import LessonPrechoice from '../views/Dashboard/LessonPrechoice.vue'
import AddLead from '../views/Dashboard/AddLead.vue'
import FirstLesson from '../views/Dashboard/FirstLesson.vue'
import SecondLesson from '../views/Dashboard/SecondLesson.vue'
import ThirdLesson from '../views/Dashboard/ThirdLesson.vue'
import DemoPage from '../views/Practice/DemoPage.vue'
import DemoLearningPage from '../views/Learning/DemoLearningPage.vue'
import PathTool from '../views/Learning/PathTool.vue'
import ProfileRouter from '../views/Dashboard/ProfileRouter.vue'

//Components
// import ProfileComponent from '../components/layouts/ProfileComponent.vue'



//Omnichannel links
import Omnichannel from '../views/Omnichannel/Omnichannel.vue'
import Place from '../views/Omnichannel/Place.vue'
import Product from '../views/Omnichannel/Product.vue'
import Promotion from '../views/Omnichannel/Promotion.vue'
import Price from '../views/Omnichannel/Price.vue'

//Product information
import PlaceInformation from '../views/ProductInformation/PlaceInformation.vue'
import PriceInformation from '../views/ProductInformation/PriceInformation.vue'
import ProductInformation from '../views/ProductInformation/ProductInformation.vue'
import PromotionInformation from '../views/ProductInformation/PromotionInformation.vue'


const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/testpage',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/profile/:id',
    name: 'ProfileRouter',
    component: ProfileRouter,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: Leads,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/add',
    name: 'AddLead',
    component:AddLead,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/lessons',
    name: 'Lessons',
    component: Lessons,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/lesson-prechoice',
    name: 'LessonPrechoice',
    component: LessonPrechoice,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/lessons/first-lesson',
    name: 'FirstLesson',
    component: FirstLesson,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/lessons/second-lesson',
    name: 'SecondLesson',
    component: SecondLesson,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/lessons/third-lesson',
    name: 'ThirdLesson',
    component: ThirdLesson,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/practice/demo-page',
    name: 'DemoPage',
    component: DemoPage,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/learning/demo-page',
    name: 'DemoLearningPage',
    component: DemoLearningPage,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/learning/path-tool',
    name: 'PathTool',
    component: PathTool,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/omnichannel/omnichannel',
    name: 'Omnichannel',
    component: Omnichannel,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/omnichannel/product',
    name: 'Product',
    component: Product,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/omnichannel/place',
    name: 'Place',
    component: Place,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/omnichannel/price',
    name: 'Price',
    component: Price,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/omnichannel/promotion',
    name: 'Promotion',
    component: Promotion,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/product-information/place',
    name: 'PlaceInformation',
    component: PlaceInformation,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/product-information/price',
    name: 'PriceInformation',
    component: PriceInformation,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/product-information/promotion',
    name: 'PromotionInformation',
    component: PromotionInformation,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/product-information/product',
    name: 'ProductInformation',
    component: ProductInformation,
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next('/login')
  } else {
    next()
  }
})

export default router
