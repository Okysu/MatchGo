<script setup lang="ts">
//Vue组件
import { onMounted, ref } from "vue";
import {
    NGrid,
    NStatistic,
    NGi,
    NDivider,
    NCard,
    NCarousel,
    NIcon,
    NScrollbar,
} from "naive-ui";
// 引入图标
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
let screenWidth = document.body.clientWidth;
const cardN = ref(screenWidth > 550 ? 2 : 1);
const listN = ref(screenWidth > 450 ? 5 : 3);
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
const lists = [
    { key: 1, name: "创建的比赛", value: "1" },
    { key: 2, name: "参加的比赛", value: "23" },
    { key: 3, name: "累计的点赞", value: "23" },
    { key: 4, name: "推荐的内容", value: "23" },
    { key: 5, name: "获得的评论", value: "23" },
];
const newMatch = [
    {
        key: 1,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    },
    {
        key: 2,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    },
    {
        key: 3,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    },
    {
        key: 4,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    },
];
const endMatch = [
    {
        key: 1,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    },
    {
        key: 2,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    },
    {
        key: 3,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    },
    {
        key: 4,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    },
];
const recMatch = [
    {
        key: 1,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    },
    {
        key: 2,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    },
    {
        key: 3,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    },
    {
        key: 4,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    },
];
const mostMatch = [
    {
        key: 1,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    },
    {
        key: 2,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    },
    {
        key: 3,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    },
    {
        key: 4,
        url: "https://yby.zone",
        img: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    },
];
</script>

<template>
    <n-scrollbar>
        <n-grid :cols="listN" style="max-width: 92%; padding-left: 4%; padding-top: 25px">
            <n-gi v-for="list in lists" :key="list.key">
                <n-statistic :label="list.name" :value="list.value" />
            </n-gi>
        </n-grid>
        <n-divider />
        <n-grid
            x-gap="5"
            y-gap="5"
            :cols="cardN"
            style="width: 96%; padding-left: 2%; bottom: 20px"
        >
            <n-gi>
                <n-card title="最新的比赛">
                    <n-carousel show-arrow autoplay>
                        <a
                            v-for="list in newMatch"
                            :key="list.key"
                            target="_blank"
                            :href="list.url"
                        >
                            <img class="carousel-img" :src="list.img" />
                        </a>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="curtom-arrow--left" @click="prev">
                                    <n-icon>
                                        <ArrowBack />
                                    </n-icon>
                                </button>
                                <button type="button" class="curtom-arrow--right" @click="next">
                                    <n-icon>
                                        <ArrowForward />
                                    </n-icon>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li
                                    v-for="index of total"
                                    :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }"
                                    @click="to(index - 1)"
                                />
                            </ul>
                        </template>
                    </n-carousel>
                </n-card>
            </n-gi>
            <n-gi>
                <n-card title="推荐的比赛">
                    <n-carousel show-arrow autoplay>
                        <a
                            v-for="list in recMatch"
                            :key="list.key"
                            target="_blank"
                            :href="list.url"
                        >
                            <img class="carousel-img" :src="list.img" />
                        </a>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="curtom-arrow--left" @click="prev">
                                    <n-icon>
                                        <ArrowBack />
                                    </n-icon>
                                </button>
                                <button type="button" class="curtom-arrow--right" @click="next">
                                    <n-icon>
                                        <ArrowForward />
                                    </n-icon>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li
                                    v-for="index of total"
                                    :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }"
                                    @click="to(index - 1)"
                                />
                            </ul>
                        </template>
                    </n-carousel>
                </n-card>
            </n-gi>
            <n-gi>
                <n-card title="即将结束的比赛">
                    <n-carousel show-arrow autoplay>
                        <a
                            v-for="list in endMatch"
                            :key="list.key"
                            target="_blank"
                            :href="list.url"
                        >
                            <img class="carousel-img" :src="list.img" />
                        </a>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="curtom-arrow--left" @click="prev">
                                    <n-icon>
                                        <ArrowBack />
                                    </n-icon>
                                </button>
                                <button type="button" class="curtom-arrow--right" @click="next">
                                    <n-icon>
                                        <ArrowForward />
                                    </n-icon>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li
                                    v-for="index of total"
                                    :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }"
                                    @click="to(index - 1)"
                                />
                            </ul>
                        </template>
                    </n-carousel>
                </n-card>
            </n-gi>
            <n-gi>
                <n-card title="参加最多的比赛">
                    <n-carousel show-arrow autoplay>
                        <a
                            v-for="list in mostMatch"
                            :key="list.key"
                            target="_blank"
                            :href="list.url"
                        >
                            <img class="carousel-img" :src="list.img" />
                        </a>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="curtom-arrow--left" @click="prev">
                                    <n-icon>
                                        <ArrowBack />
                                    </n-icon>
                                </button>
                                <button type="button" class="curtom-arrow--right" @click="next">
                                    <n-icon>
                                        <ArrowForward />
                                    </n-icon>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li
                                    v-for="index of total"
                                    :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }"
                                    @click="to(index - 1)"
                                />
                            </ul>
                        </template>
                    </n-carousel>
                </n-card>
            </n-gi>
        </n-grid>
        <n-divider />
        <br />
    </n-scrollbar>
</template>
<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
}

.custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
}

.custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-dots li.is-active {
    width: 40px;
    background: #fff;
}
</style>