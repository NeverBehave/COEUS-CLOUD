import initLayout from '@/layouts/init'

export default [{
  path: '/dashboard',
  component: initLayout,
  children: [{
      path: '/',
      name: 'DashBoard',
      component: () => import(/* webpackChunkName: "Dashboard" */ './views/main')
  }]
}]
