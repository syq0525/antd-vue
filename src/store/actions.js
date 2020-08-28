/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-04 10:46:46
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 16:49:16
 */
export default {
  getHostSync({
    commit
  },data) {
    commit('getHost',data)
  },
  setUserInfoSync({
    commit
  },data) {
    commit('setUserInfo',data)
  },
  logoutSync({
    commit
  }) {
    commit('logout')
  },
}