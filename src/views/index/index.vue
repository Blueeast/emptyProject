<template>
  <div class="index-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({})
export default class Index extends Vue {
  // data
  data: IndexData = {
    pageName: 'index'
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
export class IndexData {
  'pageName': string
}
</script>

<style lang="scss">
  @import './index.scss';
</style>

