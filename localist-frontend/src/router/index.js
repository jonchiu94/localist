import VueRouter from 'vue-router'
import Signup from '@/components/Signup.vue'
import Users from '@/components/Users.vue'
import Signin from '@/components/Signin.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
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
          path: '/signup',
          name: 'Signup',
          component: Signup
        }
  ]
})
