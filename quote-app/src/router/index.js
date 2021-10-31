import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/all',
    name: 'All Quotes',
    component: All
  }

]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
