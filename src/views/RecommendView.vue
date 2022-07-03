<script setup lang="ts">
import { NScrollbar, NList, NListItem, NThing, NDivider, NA } from "naive-ui";
const dateNow = () => {
  var myDate = new Date();
  return myDate.toLocaleString();
};
const recList = [
  {
    key: 1,
    name: "超级牛逼的比赛",
    to: "无敌牛逼的期刊",
    type: "发表",
    url: "https://yby.zone",
    date: dateNow(),
  },
  {
    key: 2,
    name: "超级牛逼的比赛",
    type: "引用",
    to: "无敌牛逼的期刊",
    url: "https://yby.zone",
    date: dateNow(),
  },
  {
    key: 3,
    name: "超级牛逼的比赛",
    to: "无敌牛逼的期刊",
    type: "发表",
    url: "https://yby.zone",
    date: dateNow(),
  },
  {
    key: 4,
    name: "超级牛逼的比赛",
    to: "无敌牛逼的期刊",
    type: "引用",
    url: "https://yby.zone",
    date: dateNow(),
  },
];
</script>
<template>
  <n-scrollbar>
    <div style="width: 96%; padding-left: 2%">
      <n-list style="overflow: hidden; bottom: 20px; padding-top: 10px" bordered>
        <n-list-item v-for="list in recList" :key="list.key">
          <n-thing :title="list.name" :title-extra="list.date" />
          你的比赛投稿内容在<n-a href="https://yby.zone" target="_blank">{{
              list.to
          }}</n-a>上被{{ list.type }}
        </n-list-item>
      </n-list>
    </div>
    <n-divider />
    <br />
  </n-scrollbar>
</template>