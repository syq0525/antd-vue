/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-05 16:04:43
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-27 17:14:43
 */
const BasicLayout = () => import('../layouts/basicLayout.vue')
const UserLayout = () => import('../layouts/userLayout.vue')
const RouteView = () => import('../layouts/routeView.vue')

const login = () => import('../pages/user/login.vue')

const ceshi0 = () => import('../pages/home.vue')
const ceshi11 = () => import('../pages/ceshi1/ceshi11.vue')
const ceshiDetail11 = () => import('../pages/ceshi1/ceshiDetail11.vue')

const ceshi22 = () => import('../pages/ceshi2/ceshi22.vue')

export default [
  {
    path: '',
    component: BasicLayout,
    redirect: '/ceshi1/ceshi11',
    meta: {
      name: 'Home'
    },
    children: [{
      path: '/ceshi0',
      component: ceshi0,
      meta: {
        key:'ceshi0',
        name: '测试0',
        icon: 'user'
      },
    }, {
      path: '/ceshi1',
      redirect: '/ceshi1/ceshi11',
      component: RouteView,
      meta: {
        key:'ceshi1',
        name: '测试1',
        icon: 'user'
      },
      children: [{
        path: '/ceshi1/ceshi11',
        component: ceshi11,
        meta: {
          key:'ceshi1.ceshi11',
          name: '测试11'
        },
      },{
        path: '/ceshi1/ceshidetail11',
        component: ceshiDetail11,
        meta: {
          key:'ceshi1.ceshi11',
          name: '测试详情11',
          hidden:true
        },
      }]
    }, {
      path: '/ceshi2',
      meta: {
        key:'ceshi2',
        name: '测试2',
        icon: 'user'
      },
      children: [{
        path: '/ceshi2/ceshi22',
        component: ceshi22,
        meta: {
          key:'ceshi2.ceshi22',
          name: '测试22'
        },
      }]
    }]
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [{
      path: '/user/login',
      component: login,
      meta: {
        name: '登录',
        noneedLogin:true
      },
    }]
  }
]