import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import App from '../views/dashboard.vue'


const routes = [
  {path: '/', component: App},
  { path: '/login', component: Login },
// {path :'/appointment' ,component:}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
