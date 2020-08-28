/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-04 10:47:10
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 16:55:24
 */
export default {
  getHost(state, data) {
    console.log(data,666666666)
    // state.HOST = data
  },
  setUserInfo(state, data) {
    state.userInfo = data
  },
  logout(state) {
    sessionStorage.removeItem('user');
    state.userInfo = null;
  },
}