/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-26 14:31:36
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 14:32:57
 */
import Vue from 'vue';
Vue.prototype.$resetTitle = function (title){
  document.title = title;
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      var i = document.createElement('iframe');
      i.src = '';
      i.style.display = 'none';
      i.onload = function () {
          setTimeout(function () {
              i.remove();
          }, 9)
      }
      document.body.appendChild(i);
  }
}