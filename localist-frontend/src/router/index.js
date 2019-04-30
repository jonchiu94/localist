import Vue from 'vue';
import VueRouter from 'vue-router'
import Users from '@/components/Users.vue'
import Signin from '@/components/Signin.vue'
import Home from '@/components/Home.vue'
import Tours from '@/components/Tours.vue'
import Guides from '@/components/Guides.vue'
import SingleGuide from "../components/SingleGuide";
import SingleTour from "../components/SingleTour";
import GuideSignUp from "../components/GuideSignUp";

Vue.use(VueRouter);
const router = new VueRouter({
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
          component: Users,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/tours',
          name: 'Tours',
          component: Tours,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/guides',
          name: 'Guides',
          component: Guides,
          meta: {
            requiresAuth: true
          }
        },
        {
            path: '/guides/:id',
            name: 'guideID',
            component: SingleGuide,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/tours/:id',
            name: 'tourID',
            component: SingleTour,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/guidesignup',
            name: 'GuideSignUp',
            component: GuideSignUp,
            meta: {
                requiresAuth: true
            }
        },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = true;

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;
