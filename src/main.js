/*
 * @Author: your name
 * @Date: 2022-04-14 11:52:47
 * @LastEditTime: 2022-04-14 16:25:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\toutiao-m\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant

import Vant from 'vant'
import 'vant/lib/index.css'
//加载全局样式
import './styles/index.less'

//动态设置rem基准值
import 'amfe-flexible'

//注册使用vant组件库
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')