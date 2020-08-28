<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-10 11:17:54
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-10 11:29:02
-->
<template>

  <keep-alive v-if="keepAlive||$route.meta.keepAlive">
    <router-view />
  </keep-alive>
  <router-view v-else/>

</template>
<script>
export default {
  name: 'RouteView',
  props: {
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  mounted(){

  }
}
</script>
