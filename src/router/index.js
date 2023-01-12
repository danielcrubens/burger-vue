import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import( '../views/Pedidos.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import( '../components/404.vue'),
    meta: { is404: true }

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
