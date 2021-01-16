import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Demo2 from '../views/Demo2.vue'
import Count from '../views/Count.vue'
import Stock from '../views/Stock.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  },
  {
    path: '/count',
    name: 'count',
    component: Count
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
