<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  NTabs,
  NTabPane,
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
const commentList = [
  {
    key: 1,
    name: "超级牛逼的比赛 1",
    comments: [
      {
        key: 1,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 2,
    name: "超级牛逼的比赛 2",
    comments: [
      {
        key: 1,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 3,
    name: "超级牛逼的比赛 3",
    comments: [
      {
        key: 1,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
  {
    key: 4,
    name: "超级牛逼的比赛 4",
    comments: [
      {
        key: 1,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 2,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 3,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 4,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 5,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 6,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
      {
        key: 7,
        name: "一言",
        content: "你真他妈的牛逼啊！膜拜！！！",
        avatar: "https://source.yby.zone/tx.jpg",
        date: dateNow(),
      },
    ],
  },
];
</script>

<template>
    <n-tabs type="line" style="padding-left: 4%; width: 92%; padding-top: 25px" animated>
      <n-tab-pane v-for="list in commentList" :key="list.key" :name="list.name" :tab="list.name">
        <n-list style="overflow: hidden" bordered>
          <n-list-item v-for="comment in list.comments" :key="comment.key">
            <template #prefix>
              <n-avatar round size="medium" :src="comment.avatar" />
            </template>
            <template #suffix>
              <n-button @click="reportContent">举报</n-button>
            </template>
            <n-thing :title="comment.name" :description="comment.content" :title-extra="comment.date" />
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
    <n-divider />
</template>
