<template>
  <div class="login-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { loginRequest } from '@/api/index'
import { setToken } from '@/utils/common'
@Component({})
export default class Login extends Vue {
  // data
  data: LoginData = {
    pageName: 'login'
  }
  created() {
    //
    loginRequest().then((res: any) => {
      console.log('res',res)
      setToken(res.token)
    })
  }
  activated() {
    //
  }
  mounted() {
    //
  }
  // 初始化函数
  init() {
    //
  }
}
export class LoginData {
  'pageName': string
}
</script>

<style lang="scss">
  @import './login.scss';
</style>

