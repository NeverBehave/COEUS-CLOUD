import initLayout from '@/layouts/init'

export default [{
  path: '/',
  name: 'Landing',
  component: initLayout,
  children: [{
    path: '/',
    name: 'AppInit',
    component: () => import(/* webpackChunkName: "action" */ './views/main')
  }]
}]
