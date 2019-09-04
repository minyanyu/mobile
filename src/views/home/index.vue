<template>
  <div>
    <van-nav-bar title="首页" />
    <van-tabs>
      <van-tab v-for="index in 8" :title="'内容 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  }
}
</script>

<style>
</style>
