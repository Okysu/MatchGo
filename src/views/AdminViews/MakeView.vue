<script setup lang="ts">
//Vue组件
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import {
    NGrid,
    NStatistic,
    NGi,
    NDivider,
    NTabs,
    NTabPane,
    NButton,
    NCard,
    NTag,
    NIcon,
} from "naive-ui";
// 引入图标
import { EyeOutline as View } from "@vicons/ionicons5";
//const or let 初始化
const Router = useRouter();
const ClickTo = (url: string) => {
    Router.push(url);
};
let screenWidth = document.body.clientWidth;
const cardN = ref(screenWidth > 550 ? 2 : 1);
const listN = ref(screenWidth > 450 ? 5 : 3);
const MathRandom = (n: number, m: number) => {
    const ans: number = Math.random() * (m - n + 1) + n;
    return parseInt(String(ans));
};
const lists = [
    { key: 1, name: "所创建的比赛", value: "4" },
    { key: 2, name: "进行中的比赛", value: "2" },
    { key: 3, name: "已结束的比赛", value: "2" },
];
const matchList = [
    {
        key: 1,
        name: "非常牛逼的比赛",
        join: MathRandom(1, 500),
        type: 0,
        cover: "https://source.yby.zone/stars-timing-0-blur-30px.jpg",
        url: "https://source.yby.zone/",
    },
    {
        key: 2,
        name: "非常牛逼的比赛",
        join: MathRandom(1, 500),
        type: 0,
        cover: "https://source.yby.zone/stars-timing-0-blur-30px.jpg",
        url: "https://source.yby.zone/",
    },
    {
        key: 3,
        name: "非常牛逼的比赛",
        join: MathRandom(1, 500),
        type: 1,
        cover: "https://source.yby.zone/stars-timing-0-blur-30px.jpg",
        url: "https://source.yby.zone/",
    },
    {
        key: 4,
        name: "非常牛逼的比赛",
        join: MathRandom(1, 500),
        type: 1,
        cover: "https://source.yby.zone/stars-timing-0-blur-30px.jpg",
        url: "https://source.yby.zone/",
    },
];
onMounted(() => {
    //小屏幕自适应
    screenWidth = document.body.clientWidth;
    cardN.value = screenWidth > 550 ? 2 : 1;
    listN.value = screenWidth > 450 ? 5 : 3;
    window.onresize = () => {
        screenWidth = document.body.clientWidth;
        cardN.value = screenWidth > 550 ? 2 : 1;
        listN.value = screenWidth > 450 ? 5 : 3;
    };
});
</script>

<template>
    <n-grid :cols="listN" style="max-width: 92%; padding-left: 4%; padding-top: 25px">
        <n-gi v-for="list in lists" :key="list.key">
            <n-statistic :label="list.name" :value="list.value" />
        </n-gi>
    </n-grid>
    <n-divider />
    <n-button style="left: 4%" @click="ClickTo('./select')" type="primary">创建新比赛</n-button>
    <n-button style="left: 5%" @click="ClickTo('./put')">申请组织赛事资格</n-button>
    <n-tabs type="line" style="padding-left: 4%; width: 92%; padding-top: 15px" animated>
        <n-tab-pane name="所创建的比赛" tab="所创建的比赛">
            <n-grid x-gap="5" y-gap="5" :cols="cardN"
                style="width: 96%; padding-left: 2%; bottom: 20px; padding-top: 10px">
                <n-gi v-for="list in matchList" :key="list.key">
                    <n-card :title="list.name">
                        <template #cover>
                            <a :href="list.url" target="_blank">
                                <img style="max-height: 200px" :src="list.cover" />
                            </a>
                        </template>
                        <template #header-extra>
                            <n-tag style="margin: 5px">
                                <template #icon>
                                    <n-icon :component="View" />
                                </template>
                                {{ list.join }}
                            </n-tag>
                            <n-tag style="margin: 5px" v-if="list.type === 0" type="success">进行中</n-tag>
                            <n-tag style="margin: 5px" v-else type="info">已结束</n-tag>
                        </template>
                        <template #action>
                            <n-button style="margin: 5px" :disabled="list.type == 1" type="primary">编辑修改</n-button>

                            <n-button style="margin: 5px" :disabled="list.type == 1" type="error">删除比赛</n-button>
                        </template>
                    </n-card>
                </n-gi>
            </n-grid>
        </n-tab-pane>
        <n-tab-pane name="进行中的比赛" tab="进行中的比赛">
            <n-grid x-gap="5" y-gap="5" :cols="cardN"
                style="width: 96%; padding-left: 2%; bottom: 20px; padding-top: 10px">
                <n-gi v-for="list in matchList" :key="list.key">
                    <n-card :title="list.name" v-if="list.type === 0">
                        <template #cover>
                            <a :href="list.url" target="_blank">
                                <img style="max-height: 200px" :src="list.cover" />
                            </a>
                        </template>
                        <template #header-extra>
                            <n-tag style="margin: 5px">
                                <template #icon>
                                    <n-icon :component="View" />
                                </template>
                                {{ list.join }}
                            </n-tag>
                            <n-tag style="margin: 5px" type="success">进行中</n-tag>
                        </template>
                        <template #action>
                            <n-button style="margin: 5px" type="primary">编辑修改</n-button>

                            <n-button style="margin: 5px" type="error">删除比赛</n-button>
                        </template>
                    </n-card>
                </n-gi>
            </n-grid>
        </n-tab-pane>
        <n-tab-pane name="已结束的比赛" tab="已结束的比赛">
            <n-grid x-gap="5" y-gap="5" :cols="cardN"
                style="width: 96%; padding-left: 2%; bottom: 20px; padding-top: 10px">
                <n-gi v-for="list in matchList" :key="list.key">
                    <n-card :title="list.name" v-if="list.type === 1">
                        <template #cover>
                            <a :href="list.url" target="_blank">
                                <img style="max-height: 200px" :src="list.cover" />
                            </a>
                        </template>
                        <template #header-extra>
                            <n-tag style="margin: 5px">
                                <template #icon>
                                    <n-icon :component="View" />
                                </template>
                                {{ list.join }}
                            </n-tag>
                            <n-tag style="margin: 5px" type="info">已结束</n-tag>
                        </template>
                        <template #action>
                            <n-button style="margin: 5px" :disabled="true" type="primary">编辑修改</n-button>

                            <n-button style="margin: 5px" :disabled="true" type="error">删除比赛</n-button>
                        </template>
                    </n-card>
                </n-gi>
            </n-grid>
        </n-tab-pane>
    </n-tabs>
    <n-divider />
</template>