<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'

}
</script>

<style>
body {
    margin: 0px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.font-awesome-element-input-icon {
    margin-left: 6px;
}

.el-form-item.center {
    text-align: center;
    display: flex;
}

.el-form-item.center > * {
    margin-left: auto;
    margin-right: auto;
}

.center {
    text-align: center;
}

html,
body,
#app,
#app > .el-container {
    height: 100%;
}
</style>
