<template>
 <a-layout>
      <a-layout-content id="initLayout">
              <router-view/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
</a-layout>
</template>

<style lang="sass" scoped>
#initLayout
  background: url(../assets/bg.jpg) no-repeat top center
  background-size: cover
</style>
