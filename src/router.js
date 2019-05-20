import Vue from 'vue'
import Router from 'vue-router'

import InitLayout from '@/layouts/init'
import MainLayout from '@/layouts/main'

import LandingRouter from '@/modules/landing/router'
import AuthRouter from '@/modules/auth/router'
import DashboardRouter from '@/modules/dashboard/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...LandingRouter,
    {
      path: '',
      component: InitLayout,
      children: [
        ...AuthRouter
      ]
    },
    {
      path: '',
      component: MainLayout,
      children: [
        ...DashboardRouter
      ]
    },
    { // Fallback
      path: '',
      component: InitLayout,
      children: [{
        path: '*',
        component: () => import(/* webpackChunkName: "WIP" */ '@/views/WIP')
      }]
    }
  ]
})
