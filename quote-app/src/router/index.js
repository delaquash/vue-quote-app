import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'
import Quote from '../views/Quote.vue'

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
  },
  {
    path: '/quote/:id',
    name: 'Single Quotes',
    component: Quote
  }

]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
