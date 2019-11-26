<template>
  <div class="home-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({})
export default class Home extends Vue {
  // data
  data: HomeData = {
    pageName: 'home'
  }
  created() {
    //
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
export class HomeData {
  'pageName': string
}
</script>

<style lang="scss">
  @import './home.scss';
</style>

