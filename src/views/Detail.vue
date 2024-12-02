<template>
  <div>
    <div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div v-if="id == 0">
      <p>{{ data.name }}</p>
      <audio :src="'../../public/mp3/' + data.src" controls autoplay></audio>
    </div>
    <div v-if="id == 1">
      <p>{{ title[songid] }}</p>
      <audio
        :src="'../../public/mp3/' + songid + '.mp3'"
        controls
        autoplay
      ></audio>
    </div>
    <div>
      <button @click="up">上一首</button>
      <button @click="btn">下一首</button>
    </div>
  </div>
</template>

<script setup>
import { NavBar } from "vant";
import { ref, onMounted } from "vue";
const data = ref("");
const id = ref(0);
const songid = ref(0);
const title = [
  "落",
  "落1",
  "落2",
  "落3",
  "落4",
  "落5",
  "落6",
  "落7",
  "落8",
  "落9",
  "落10",
  "落11",
  "落12",
  "落13",
  "落14",
];
//点击下一首 ，当超过最大限制时，重0开始
const btn = () => {
  id.value = 1;
  songid.value = songid.value + 1;
  if (songid.value > 14) {
    songid.value = 0;
  }
};

const up = () => {
  id.value = 1;
  songid.value = songid.value - 1;
};
const onClickLeft = () => history.back();
onMounted(() => {
  data.value = JSON.parse(sessionStorage.getItem("detail"));
  songid.value = JSON.parse(sessionStorage.getItem("detail")).id;
});
</script>

<style scoped>
</style>