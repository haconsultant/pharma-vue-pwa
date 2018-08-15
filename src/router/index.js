import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import AppUserAccess from '@/components/App/AppUser/AppUserAccess'
import Main from '@/components/Views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/user/access',
      name: 'User',
      component: AppUserAccess
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
