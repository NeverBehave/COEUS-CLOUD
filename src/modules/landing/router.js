import initLayout from '@/layouts/init'

export default [{
  path: '/',
  component: initLayout,
  children: [{
    path: '/',
    name: 'AppInit',
    component: () => import(/* webpackChunkName: "landing" */ './views/main')
  }]
}]
