import VueRouter from 'vue-router'
import Signup from '@/components/Signup.vue'
import Users from '@/components/Users.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Signup',
            component: Signup
        },
        {
          path: '/users',
          name: 'Users',
          component: Users
      }
  ]
})
