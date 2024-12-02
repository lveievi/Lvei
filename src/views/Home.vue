<template>
  <div>
    <div class="top">
      <div class="cate">
        <van-icon name="wap-nav" size="40" />
      </div>
      <div class="ipt">
        <input type="text" />
      </div>
      <div>
        <img src="../../public/mkf.png" width="30" height="40" />
      </div>
    </div>
    <h1>早上好</h1>
    <div class="scoll">
      <div v-for="item in scolllist" :key="item.id" @click="gotoaduio">
        <img :src="item.img" width="150" height="150" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div>
        <p @click="gotovideo">去视频列表</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const scolllist = ref([
  {
    id: 1,
    name: "每日推荐",
    img: "http://img1.baidu.com/it/u=2448021646,92137899&fm=253&app=138&f=JPEG?w=800&h=858",
  },
  {
    id: 2,
    name: "电音日报",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F7046f67c-dd45-4e11-907c-6d4662a04def%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1734141771&t=11c4eb5f462ebea1c8a7357cf686c2d8",
  },
  {
    id: 3,
    name: "热门歌单",
    img: "http://img0.baidu.com/it/u=1338268469,3278063441&fm=253&app=138&f=JPEG?w=500&h=666",
  },
  {
    id: 4,
    name: "独家分享",
    img: "http://img0.baidu.com/it/u=581809176,2191045041&fm=253&app=138&f=JPEG?w=500&h=666",
  },
  {
    id: 5,
    name: "私人漫游",
    img: "https://s1.link-nemo.com/net/attach/transfer?url=https%3A%2F%2Fimg.ithome.com%2Fnewsuploadfiles%2F2024%2F5%2Fea1f2473-3bb8-4ca8-8eb8-f30b441c014a.png%3Fx-bce-process%3Dimage%2Fwatermark%2Cimage_aW1nL3dhdGVybWFyay9xYy9xYzExOS5wbmc%3D%2Ct_100%2Cg_7%2Cy_22%2Cx_22%2Ca_0%2Fformat%2Cf_auto&compress=false",
  },
]);
const router = useRouter();
const gotovideo=()=>{
    router.push('/video')
}

const gotoaduio = () => {
    router.push('/audio')
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top input{
  width:'60%';
  height: 30px;
  border-radius: 15px;
  background: rgb(240, 239, 239);
  
  border: none;
}
.scoll {
  text-align: center;
  display: flex;
  overflow-x: scroll;
  margin-top: 20px;
  margin-left: 10px;
  scrollbar-width: none;
}
</style>