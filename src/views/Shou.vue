<template>
  <div class="main">
    <router-view></router-view>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">推荐</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o">漫游</van-tabbar-item>
      <van-tabbar-item icon="setting-o">动态</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRouter } from "vue-router";
import { Tabbar, TabbarItem } from "vant";
import { showToast } from "vant";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
const router = useRouter();
const active = ref(0);
const onChange = (index) => {
  if(index==0){
    router.push("/shou/")
  }else if(index==1){
    router.push("/shou/faxian")
  }else if(index==2){
    router.push("/shou/manyou")
  }else if(index==3){
    router.push("/shou/dongtai")
  }else if(index==4){
    router.push("/shou/my")
  }
  
};
</script>

<style  scoped>
.main{
  width: 100vw;
  height: 100vh;
}
.bottom {
  margin-top: 20px;
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 30px;
}
</style>