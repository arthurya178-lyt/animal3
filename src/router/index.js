import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import menu from '../components/menu/menu'
import hello from '../components/HelloWorld'
import menuItem from '../components/menu/MenuItem'
//import test from '../components/test OMG.html'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: menu
  },
  {
    path: '/ha',
    name: 'helloworld',
    component:hello
  },
  {
    path: '/:id',
    component:menuItem
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
