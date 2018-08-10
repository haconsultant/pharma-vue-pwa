import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Main from '@/components/Views/Main'
import Doc1 from '@/components/Views/Doc1'
import Doc2 from '@/components/Views/Doc2'

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
