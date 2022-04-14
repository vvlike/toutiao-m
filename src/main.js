/*
 * @Author: your name
 * @Date: 2022-04-14 11:52:47
 * @LastEditTime: 2022-04-14 15:29:08
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
//注册使用vant组件库
Vue.use(Vant);


//加载全局样式
import './style/index.less'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')