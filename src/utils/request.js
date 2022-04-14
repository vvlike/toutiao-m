/*
 * @Author: your name
 * @Date: 2022-04-14 20:27:36
 * @LastEditTime: 2022-04-14 20:31:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\toutiao-m\src\utils\request.js
 */
//axios的二次封装
import axios from 'axios';
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn' //接口的基准路径
})

//请求拦截器
//响应拦截器
export default request