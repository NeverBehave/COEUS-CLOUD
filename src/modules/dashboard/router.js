import layout from './layout'

export default [{
  path: '/dashboard',
  component: layout,
  children: [{
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ './views/Dashboard')
  }]
}]
