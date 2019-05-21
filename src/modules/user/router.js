import layout from './layout'

export default [{
  path: '/user',
  component: layout,
  children: [{
    path: '/',
    name: 'UserInfo',
    component: () => import(/* webpackChunkName: "UserInfo" */ './views/Info')
  }]
}]
