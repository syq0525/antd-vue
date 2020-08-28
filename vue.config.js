/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-06-26 09:41:02
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-05 16:52:23
 */
const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/CRM/WeChat/App/' : '/',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, {
        limit: 4096
      }));
  },
  css: {
    loaderOptions: {
      less: {
        
        lessOptions: {
          javascriptEnabled: true
        },
        // additionalData: `@import "~@/assets/css/base.less";`,
      },
    },
  },

  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: true,
    proxy: {
      '/mall29': {
        target: 'https://ceshi.lechengclub.com',
        changeOrigin: true
      },

    }
  }
};