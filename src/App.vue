<template>
  <div>
    <hader-menu />
    <router-view></router-view>

  </div>
</template>

<script>
import HaderMenu from './header/MainHader.vue'
export default {
  name: 'App',
  components: {
    HaderMenu,
  },
}
</script>

<style>
</style>
