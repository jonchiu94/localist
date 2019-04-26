import VueRouter from 'vue-router'
import Users from '@/components/Users.vue'
import Signin from '@/components/Signin.vue'
import Home from '@/components/Home.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '*',
          redirect: '/'
        },
        {
            path: '/',
            name: 'Signin',
            component: Signin
        },
        {
          path: '/users',
          name: 'Users',
          component: Users
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
  ]
})
