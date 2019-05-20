<template>
  <a-card title="Login">
    <a href="#" slot="extra">Register?</a>
    <LoginForm/>
  </a-card>
</template>

<script>
import LoginForm from '../Form/LoginForm'
export default {
     name: 'LoginCard',
     components: {
         LoginForm
     }
}
</script>
