<template>
  <div>
    <van-tabs v-model:active="active" @change="change">
      <!-- 遍历出来类型分类 -->
      <van-tab v-for="item in catelist" :key="item.id" :title="item.name">
        <div v-if="active == 0">
          <!-- 视频标签 -->
          <div class="video" @click="gbcid(1)">
            <video
              v-if="clickid == 1"
              controls
              src="../../public/mp4/分类1/1.mp4"
              width="220"
              height="90"
              autoplay
            ></video>
            <video
              src="../../public/mp4/分类1/1.mp4"
              width="220"
              height="90"
              v-else
            ></video>
            <p>触发声德叔超过600万播放量的两个视频合集</p>
          </div>

          <div class="video" @click="gbcid(2)">
            <video
              v-if="clickid == 2"
              controls
              src="../../public/mp4/分类1/2.mp4"
              width="220"
              height="90"
              autoplay
            ></video>
            <video
              src="../../public/mp4/分类1/2.mp4"
              width="220"
              height="90"
              v-else
            ></video>
            <p>触发声德叔超过600万播放量的两个视频合集</p>
          </div>

          <div class="video" @click="gbcid(3)">
            <video
              v-if="clickid == 3"
              controls
              src="../../public/mp4/分类2/3.mp4"
              width="220"
              height="90"
              autoplay
            ></video>
            <video
              src="../../public/mp4/分类2/3.mp4"
              width="220"
              height="90"
              v-else
            ></video>
            <p>触发声德叔超过600万播放量的两个视频合集</p>
          </div>

          <div class="video" @click="gbcid(4)"> 
            <video
              v-if="clickid == 4"
              controls
              src="../../public/mp4/分类2/4.mp4"
              width="220"
              height="90"
              autoplay
            ></video>
            <video
              src="../../public/mp4/分类2/4.mp4"
              width="220"
              height="90"
              v-else
            ></video>
            <p>触发声德叔超过600万播放量的两个视频合集</p>
          </div>

          <div class="video" @click="gbcid(5)">
            <video
              v-if="clickid == 5"
              controls
              src="../../public/mp4/分类2/5.mp4"
              width="220"
              height="90"
            ></video>
            <video
              src="../../public/mp4/分类2/5.mp4"
              width="220"
              height="90"
              v-else
            ></video>
            <p>触发声德叔超过600万播放量的两个视频合集</p>
          </div>
        </div>
        <div v-if="active == 1">
          <h1>MV</h1>
        </div>
        <div v-if="active == 2">
          <h1>现场</h1>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { Tab, Tabs } from "vant";
import { ref } from "vue";
const active = ref(0);
const clickid = ref(0);
const change = (i) => {
  active.value = i;
};

const gbcid=(index)=>{
  clickid.value=index
}
const catelist = ref([
  {
    id: 1,
    name: "全部",
  },
  {
    id: 2,
    name: "MV",
  },
  {
    id: 3,
    name: "现场",
  },
  {
    id: 4,
    name: "混剪",
  },
  {
    id: 5,
    name: "演奏",
  },
  {
    id: 6,
    name: "才艺",
  },
  {
    id: 7,
    name: "展示",
  },
  {
    id: 8,
    name: "蹦迪",
  },
]);
</script>

<style scoped>
.video {
  margin: 10px 0;
  display: flex;
}
</style>