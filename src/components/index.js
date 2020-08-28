/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-05 15:38:34
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-28 10:37:03
 */
import {
  Layout,
  Breadcrumb,
  Button,
  Menu,
  Icon,
  Card,
  Form,
  Input,
  Dropdown,
  Spin,
  Row,
  Col,
  Select,
  InputNumber,
  DatePicker,
  Table,
  Radio,
  Drawer,
  message
  
} from 'ant-design-vue';

import PageContainer from './common/pageContainer';
const install = function (Vue) {

  Vue.component(PageContainer.name, PageContainer);

  Vue.use(Layout);
  Vue.use(Breadcrumb);
  Vue.use(Menu);
  Vue.use(Button);
  Vue.use(Icon);
  Vue.use(Card);
  Vue.use(Form);
  Vue.use(Input);
  Vue.use(Dropdown);
  Vue.use(Spin);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Select);
  Vue.use(InputNumber);
  Vue.use(DatePicker);
  Vue.use(Table);
  Vue.use(Radio);
  Vue.use(Drawer);
  Vue.prototype.$message = message;
  Vue.$message = Vue.prototype.$message
}

export default install;