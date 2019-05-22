import layout from './layout'

export default [{
  path: '/notification',
  component: layout,
  children: [{
    path: '',
    name: 'NotificationList',
    component: () => import(/* webpackChunkName: "landing" */ './views/NotificationList')
  }]
}]
