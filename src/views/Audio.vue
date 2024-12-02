<template>
  <div>
    <div>
      <van-nav-bar
        title="排行榜"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <h1>播放全部</h1>
    <div>
      <div
        v-for="item in datalist"
        :key="item.id"
        class="audio"
        @click="gotodetail(item)"
      >
        <div>{{ item.name }}</div>
        <audio :src="'../../public/mp3/' + item.src" controls></audio>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NavBar } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => history.back();
import { ref } from "vue";
const datalist = ref([
  {
    id: 1,
    name: "落",
    src: "1.mp3",
  },
  {
    id: 2,
    name: "落1",
    src: "2.mp3",
  },
  {
    id: 3,
    name: "落2",
    src: "3.mp3",
  },
  {
    id: 4,
    name: "落3",
    src: "4.mp3",
  },
  {
    id: 5,
    name: "落4",
    src: "5.mp3",
  },
  {
    id: 6,
    name: "落5",
    src: "6.mp3",
  },
  {
    id: 7,
    name: "落6",
    src: "7.mp3",
  },
  {
    id: 8,
    name: "落7",
    src: "8.mp3",
  },
  {
    id: 9,
    name: "落8",
    src: "9.mp3",
  },
  {
    id: 10,
    name: "落9",
    src: "10.mp3",
  },
]);

const gotodetail = (item) => {
  sessionStorage.setItem("detail", JSON.stringify(item));
  router.push('/detail')
};
</script>

<style scoped>
.audio {
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>