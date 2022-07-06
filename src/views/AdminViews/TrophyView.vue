<script setup lang="ts">
import {
  NGrid,
  NGi,
  NDivider,
  NRow,
  NCol,
  NStatistic,
  NCard,
} from "naive-ui";
const MathRandom = (n: number, m: number) => {
  const ans: number = Math.random() * (m - n + 1) + n;
  return parseInt(String(ans));
};
const trophyList = [
  {
    key: 1,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: MathRandom(1, 99) + " 等奖",
  },
  {
    key: 2,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: "暂未获奖",
  },
  {
    key: 3,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: MathRandom(1, 99) + " 等奖",
  },
  {
    key: 4,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: "暂未获奖",
  },
  {
    key: 5,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: MathRandom(1, 99) + " 等奖",
  },
  {
    key: 6,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: MathRandom(1, 99) + " 等奖",
  },
  {
    key: 7,
    name: "超级牛逼的比赛",
    ranks: MathRandom(1, 500),
    get: MathRandom(1, 99) + " 等奖",
  },
];

</script>

<template>
  <n-grid x-gap="5" y-gap="5" :cols="1" style="width: 96%; padding-left: 2%; bottom: 20px; padding-top: 10px">
    <n-gi v-for="list in trophyList" :key="list.key">
      <n-card :title="list.name">
        <n-row>
          <n-col :span="12">
            <n-statistic label="排行榜" :value="list.ranks">
              <template #suffix> / 500 </template>
            </n-statistic>
          </n-col>
          <br />
          <n-col :span="12">
            <n-statistic label="获得奖项"> {{ list.get }}</n-statistic>
          </n-col>
        </n-row>
      </n-card>
    </n-gi>
  </n-grid>
  <n-divider />
</template>