<template>
  <div>
    <input type="text" v-model="userinfo.username">
    <input type="password" v-model="userinfo.password">
    <el-button type="primary" @click="hangdler">注册</el-button>
    <el-button type="primary" @click="login_handler">登录</el-button>
  </div>
</template>

<script>
import { registerAPI, loginAPI } from './api/index'
export default {
  data () {
    return {
      userinfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    hangdler () {
      registerAPI(this.userinfo).then(res => {
        console.log(res.data)
      })
    },
    login_handler () {
      loginAPI(this.userinfo).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
