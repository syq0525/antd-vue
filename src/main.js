/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-05 14:56:19
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 17:00:31
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './config/routes';
import Components from './components/index';
import App from './App.vue'
import Utils from './utils/index';
import store from './store'
Vue.config.productionTip = false
Vue.use(Utils);
Vue.use(VueRouter);
Vue.use(Components);

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes
});
Vue.$router = router;
Vue.$store = Vue.prototype.$store = store;
const user = JSON.parse(unescape(sessionStorage.getItem('user')));
Vue.$store.dispatch("setUserInfoSync",user);
router.beforeEach((to, from, next) => {
  if (!Vue.$store.state.userInfo&&!to.meta.noneedLogin) {
    next({ path: '/user/login' })
  } else {
    next()
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
