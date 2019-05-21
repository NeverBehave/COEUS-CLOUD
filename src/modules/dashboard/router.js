import mainLayout from '@/layouts/main'

export default [{
  path: '/dashboard',
  component: mainLayout,
  children: [{
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ './views/main')
  }]
}]
