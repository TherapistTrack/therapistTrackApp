import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../components/UserLogin.vue'
import CreateUser from '../components/CreateUser.vue'
import EditUser from '../components/EditUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userLogin',
      component: UserLogin
    },
    {
      path: '/create-user',
      name: 'createUser',
      component: CreateUser
    },
    {
      path: '/edit-user',
      name: 'editUser',
      component: EditUser
    }
  ]
})

export default router
