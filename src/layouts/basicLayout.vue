<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-05 15:50:21
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-28 15:41:44
-->
<template>
  <a-layout class="basic-layout" style="min-height: 100vh">
    <div class="draw-mark" v-if="isMobile&&!collapsed" @click="collapsed=true"></div>
    <a-layout-sider
      :class="{'draw-sider':isMobile}"
      v-model="collapsed"
      breakpoint="lg"
      :collapsedWidth="isMobile?0:80"
      :trigger="null"
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        @click="selMenu"
        :open-keys="openKeys"
        @openChange="onOpenChange"
        :default-selected-keys="[$route.meta.key]"
      >
        <template v-for="item in menus">
          <a-menu-item v-if="!item.children&&!item.meta.hidden" :key="item.meta.key">
            <a-icon :type="item.meta.icon" />
            <span>{{item.meta.name}}</span>
          </a-menu-item>

          <a-sub-menu v-else :key="item.meta.key">
            <span slot="title">
              <a-icon :type="item.meta.icon" />
              <span>{{item.meta.name}}</span>
            </span>
            <template v-for="child in item.children">
              <a-menu-item :key="child.meta.key" v-if="!child.meta.hidden">{{child.meta.name}}</a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown>
          <div class="ant-dropdown-link">{{userInfo&&userInfo.name}}</div>
          <a-menu slot="overlay">
            <a-menu-item @click="logout">退出登录</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content>
        <!-- <keep-alive :include="/^in-/"> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </a-layout-content>
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      collapsed: false,
      menus: [],
      openKeys: [],
      isMobile: false
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.judgeMobile();
    window.onresize = () => {
      this.judgeMobile();
    };
  },
  mounted() {
    this.menus = this.$router.options.routes[0].children;
    this.openKeys = [this.$route.matched[1].meta.key];
  },
  methods: {
    ...mapActions(["logoutSync"]),
    judgeMobile() {
      const width = (window.screenWidth = document.body.clientWidth);
      if(this.isMobile&&width>576&&width<=992){
        this.collapsed = true
      }
      if (width <= 576) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    selMenu(e) {
      const path = `/${e.key.replace(/\./g, "/")}`;
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    },
    onOpenChange(openKeys) {
      const key = openKeys[openKeys.length - 1];
      this.openKeys = key ? [key] : [];
    },
    logout() {
      this.$router.push("/user/login");
      this.logoutSync();
    }
  }
};
</script>
<style lang="less" scoped>
.basic-layout {
  .draw-mark{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    z-index: 9;
  }
  .draw-sider{
    position: fixed;
    z-index: 10;
    height: 100%;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-dropdown-link {
    cursor: pointer;
    padding: 0 12px;
    margin-right: 12px;
    float: right;
    transition: all 0.3s;
  }
  .ant-dropdown-link:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  .breadcrumb {
    background: #fff;
  }
}
</style>