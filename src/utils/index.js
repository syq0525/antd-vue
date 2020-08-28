/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-07-08 09:42:12
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-26 14:41:12
 */

require('./base')
import Request from './request';

const install = function (Vue) {
	Vue.use(Request)
}

export default install