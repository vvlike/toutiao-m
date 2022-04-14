/*
 * @Author: your name
 * @Date: 2022-04-14 16:27:33
 * @LastEditTime: 2022-04-14 20:18:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\toutiao-m\postcss.config.js
 */
module.exports = {
    plugins: {
        //css 配置
        'postcss-pxtorem': {
            //设计稿 宽度的十分之一
            //如果是vant的样式就按37.5来转化
            //如果是我们自己的样式就按照75来换算
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
        //自动生成浏览器css样式规则前缀
        /*  'autoprefixer': {
             //配置要兼容到的环境信息
             browsers: ['Android>=4.0', 'ios>=8']
         } */
    },
};