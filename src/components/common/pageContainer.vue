<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-06 08:51:24
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 17:07:31
-->
<template>
  <div>
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">{{item.meta.name}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main">
      <slot></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'page-container',
  mounted(){

  }
}
</script>
<style lang="less" scoped>
  .breadcrumb{
    border-top: 1px solid #e8e8e8; 
    background: #fff;
    padding: 16px 24px;
    margin-bottom: 24px;
  }
  .main{
    margin: 0 24px;
  }
</style>