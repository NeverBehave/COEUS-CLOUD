export default [{
    path: '/',
    name: 'AppInit',
    component: () => import( /* webpackChunkName: "action" */ './views/main')
}]