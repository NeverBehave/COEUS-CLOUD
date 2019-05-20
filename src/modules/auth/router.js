export default [{
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "action" */ './views/Login')
},{
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "action" */ './views/Register')
}]