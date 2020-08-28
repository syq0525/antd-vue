/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-05 14:56:19
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-05 15:34:29
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        // libraryDirectory: "es",
        style: true
      }
    ]
  ]
}