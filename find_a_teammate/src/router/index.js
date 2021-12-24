import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../views/HomePage"
import User from "../components/User"
import addUser from "../components/addUser"
import findRandomUser from "../components/findRandomUser"
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/users/:id',
    name: 'user-details',
    component: User
  },
  {
    path: "/users/random",
    name: 'find-random',
    component: findRandomUser
  },
  {
    path: '/users/create',
    name: 'add-user',
    component: addUser
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
