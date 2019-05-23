import layout from './layout'

export default [{
  path: '/resource',
  component: layout,
  children: [{
    path: '/',
    name: 'ResourceList',
    component: () => import(/* webpackChunkName: "ResourceList" */ './views/ResourceList')
  },
  {
    path: 'group',
    name: 'ResourceGroup',
    component: () => import(/* webpackChunkName: "ResourceList" */ './views/ResourceGroup')
  }]
}]
