import authLayout from './layout'

export default [{
  path: '/auth',
  name: 'AuthRouter',
  component: authLayout,
  children: [{
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ './views/Login')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ './views/Register')
  }, {
    path: '/passwordReset',
    name: 'PasswordReset',
    component: () => import(/* webpackChunkName: "Register" */ './views/PasswordReset')
  }
  ]
}]
