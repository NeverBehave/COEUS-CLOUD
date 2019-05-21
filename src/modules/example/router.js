import mainLayout from '@/layouts/main'

export default [{
  path: '/',
  component: mainLayout,
  children: [{
    path: '/',
    name: 'AppInit',
    component: () => import(/* webpackChunkName: "landing" */ './views/main')
  }]
}]
