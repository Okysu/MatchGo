<script setup lang="ts">
import {
  NGrid,
  NGi,
  NDivider,
  NRow,
  NCol,
  NStatistic,
  NCard,
  NButton,
} from "naive-ui";

const dateNow = () => {
  var myDate = new Date();
  return myDate.toLocaleString();
};
const trophyList = [
  {
    key: 1,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "获奖",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 2,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "上推",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 3,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "引用",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 4,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "引用",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 5,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "上推",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 6,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "收录",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
  {
    key: 7,
    match: "超级牛逼的比赛",
    url: "https://yby.zone",
    type: "引用",
    date: dateNow(),
    to: "https://yby.zone",
    name: "神奇的地方",
  },
];
const Goto = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <n-grid x-gap="5" y-gap="5" :cols="1" style="width: 96%; padding-left: 2%; bottom: 20px; padding-top: 10px">
    <n-gi v-for="list in trophyList" :key="list.key">
      <n-card :title="list.match">
        <n-row>
          <n-col :span="12">
            <n-statistic :label="list.date">
              <template #suffix>
                {{ list.name }}
              </template>
            </n-statistic>
          </n-col>
          <br />
          <n-col :span="12">
            <n-statistic :label="list.type">
              <n-button strong secondary type="primary" @click="Goto(list.to)">查看</n-button>
            </n-statistic>
          </n-col>
        </n-row>
      </n-card>
    </n-gi>
  </n-grid>
  <n-divider />
</template>