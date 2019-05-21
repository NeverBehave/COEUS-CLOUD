import layout from './layout'

export default [{
  path: '/material',
  component: layout,
  children: [{
    path: '/',
    name: 'MaterialList',
    component: () => import(/* webpackChunkName: "MaterialList" */ './views/MaterialList')
  },
  {
    path: 'group',
    name: 'MaterialGroup',
    component: () => import(/* webpackChunkName: "MaterialList" */ './views/MaterialGroup')
  }]
}]
