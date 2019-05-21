import layout from './layout'

export default [{
  path: '/tasks',
  component: layout,
  children: [{
    path: '/',
    name: 'TaskList',
    component: () => import(/* webpackChunkName: "TaskList" */ './views/TaskList')
  },
  {
    path: 'new',
    name: 'NewTask',
    component: () => import(/* webpackChunkName: "TaskList" */ './views/NewTask')
  }]
}]
