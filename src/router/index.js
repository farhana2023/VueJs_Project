import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

import DashboardView  from '../views/DashboardView.vue';

import PayrollView  from '../views/PayrollView.vue';

import { useAuthStore } from '../stores/auth';



let isLogin=false;


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        auth:false,
      }
    },

    {
      path: '/profile',
      name: 'profile',
      component: AboutView,
      meta:{
        auth:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        auth:false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        auth:false,
      }
    },

    {
      path: '/Dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{
        auth:false,
      }
    },
    {
      path: '/Payroll',
      name: 'payroll',
      component: PayrollView,
      meta:{
        auth:true,
      }
    }
 
  ]
});

router.beforeEach(async (to, from) => {
  // console.log("FROM: ",from);
  // console.log("TO: ", to);
  const authStore = useAuthStore();

  console.log('AUTH:',authStore);

  if(to.meta.auth && !authStore.isAuthenticated) {
    return { name: 'login' };
  }

  if(to.fullPath == '/login' && authStore.isAuthenticated) {
    return { name: 'home' };
  }

  if(to.fullPath == '/register' && authStore.isAuthenticated) {
    return { name: 'home' };
  }
});

export default router
