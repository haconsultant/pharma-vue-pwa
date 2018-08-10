import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Main from '@/components/Dashboard/Main'
import Doc1 from '@/components/Dashboard/View/Doc1'
import Doc2 from '@/components/Dashboard/View/Doc2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        { path: '/main/view/doc1', component: Doc1 },
        { path: '/main/view/doc2', component: Doc2 }
      ]
    }
  ]
})
