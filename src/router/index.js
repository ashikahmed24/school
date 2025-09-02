import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/register',
      name: 'register',
      component: () => import('../views/auth/register.vue'),
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
    },
    {
      path: '/auth/forgot',
      name: 'forgot',
      component: () => import('../views/auth/forgot.vue'),
    },

    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
  ],
})

export default router
