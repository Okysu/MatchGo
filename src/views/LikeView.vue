<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  NTabs,
  NTabPane,
  NScrollbar,
  NButton,
  NList,
  NListItem,
  NAvatar,
  NThing,
  NDivider,
} from "naive-ui";
import { useRouter } from "vue-router";
let screenWidth = document.body.clientWidth;
const cardN = ref(screenWidth > 550 ? 2 : 1);
//const or let 初始化
const Router = useRouter();
const reportContent = () => {
  Router.push('./put');
};
onMounted(() => {
  //小屏幕自适应
  screenWidth = document.body.clientWidth;
  cardN.value = screenWidth > 550 ? 2 : 1;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    cardN.value = screenWidth > 550 ? 2 : 1;
  };
});
const dateNow = () => {
  var myDate = new Date();
  return myDate.toLocaleString();
};
const likeList = [
  {
    key: 1,
    name: "超级牛逼的比赛 1",
    likes: [
      {
        key: 1,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 2,
    name: "超级牛逼的比赛 2",
    likes: [
      {
        key: 1,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 3,
    name: "超级牛逼的比赛 3",
    likes: [
      {
        key: 1,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 4,
    name: "超级牛逼的比赛 4",
    likes: [
      {
        key: 1,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
];
</script>

<template>
  <n-scrollbar>
    <n-tabs
      type="line"
      style="padding-left: 4%; width: 92%; padding-top: 25px"
      animated
    >
      <n-tab-pane
        v-for="list in likeList"
        :key="list.key"
        :name="list.name"
        :tab="list.name"
      >
        <n-list bordered>
          <n-list-item v-for="like in list.likes" :key="like.key">
            <template #prefix>
              <n-avatar round size="medium" :src="like.avatar"
            /></template>
            <template #suffix>
              <n-button @click="reportContent">举报</n-button>
            </template>
            <n-thing :title="like.name" :title-extra="like.date" />
            做的不错，支持一下！
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
    <n-divider />
    <br />
  </n-scrollbar>
</template>