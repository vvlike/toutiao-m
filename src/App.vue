<!--
 * @Author: your name
 * @Date: 2022-04-14 11:52:47
 * @LastEditTime: 2022-04-14 16:44:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\toutiao-m\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-dianzan2"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group> 
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box{
  width: 200px;
  height: 100px;
  background-color: pink;
  
}
</style>
