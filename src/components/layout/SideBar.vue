<template>
  <n-menu v-model:value="selectedKey" :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<script setup lang="ts">
import { h, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Component } from "vue";
import type { MentionOption } from "naive-ui";
import { NIcon, NMenu } from "naive-ui";
//引入store
import { useStatusStore } from "@/stores/status";
import {
  GameControllerOutline as GameIcon,
  HomeOutline as HomeIcon,
  PeopleOutline as PeopleIcon,
  BalloonOutline as BalloonIcon,
  Information as InfoIcon,
} from "@vicons/ionicons5";
let Store: any = null;
const Router = useRouter();
Store = useStatusStore();
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
onMounted(() => {
  //注册message监听事件
  window.addEventListener("message", (e) => {
    const message: string[] = e.data.toString().split(",");
    if (message[0] == "RouterUrlReCaller") {
      if (message[1] != selectedKey.value) //防止过度刷新
        selectedKey.value = message[1];
    }
  });
});
const selectedKey = ref("home");
const menuOptions = [
  {
    label: "首页",
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: "比赛信息",
    key: "game",
    icon: renderIcon(GameIcon),
    children: [
      {
        label: "创建的比赛",
        key: "make",
      },
      {
        label: "参加的比赛",
        key: "join",
      },
      {
        label: "进行的比赛",
        key: "all",
      },
    ],
  },
  {
    label: "荣誉中心",
    key: "star",
    icon: renderIcon(BalloonIcon),
    children: [
      {
        label: "获得点赞",
        key: "like",
      },
      {
        label: "获得评论",
        key: "comment",
      },
      {
        label: "获得奖项",
        key: "trophy",
      },
      {
        label: "推荐内容",
        key: "recommend",
      },
    ],
  },
  {
    label: "个人信息",
    key: "user",
    icon: renderIcon(PeopleIcon),
    children: [
      {
        label: "修改资料",
        key: "set",
      },
      {
        label: "提交工单",
        key: "put",
      },
      {
        label: "退出登录",
        key: "quit",
      },
    ],
  },
  {
    key: "divider-2",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: "关于系统",
    key: "about",
    icon: renderIcon(InfoIcon),
  },
];
const handleUpdateValue = (key: string, item: MentionOption) => {
  if (key == "quit") {
    Store.Login(false);
    Router.push("/");
    return;
  }
  Router.push(key);
};
</script>