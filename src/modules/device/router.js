import layout from './layout'

export default [{
  path: '/devices',
  component: layout,
  children: [{
    path: '',
    name: 'DeviceList',
    component: () => import(/* webpackChunkName: "DeviceList" */ './views/DeviceList')
  },
  {
    path: 'control',
    name: 'DeviceControl',
    component: () => import(/* webpackChunkName: "DeviceControl" */ './views/DeviceControl')
  }]
}]
