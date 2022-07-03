<template>
  <n-layout style="height: 100%">
    <n-layout position="absolute" style="top: 0px" has-sider>
      <n-layout-sider
        content-style="padding: 0px;"
        :native-scrollbar="false"
        collapse-mode="transform"
        :collapsed-width="0"
        :width="200"
        bordered
        show-trigger="bar"
        :collapsed="collapsed"
        position="static"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-layout-header style="height: 44px; padding: 12px; text-align: center" bordered>Match Go</n-layout-header>
        <SideBar></SideBar>
      </n-layout-sider>
      <n-layout content-style="padding: 0px;" :native-scrollbar="false">
        <RouterView></RouterView>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
// Vue组件
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
} from "naive-ui";
// 引入自定义组件
import SideBar from "@/components/layout/SideBar.vue";
let screenWidth = document.body.clientWidth;
const collapsed = ref(false);
onMounted(() => {
  //注册message监听事件
  screenWidth = document.body.clientWidth;
  collapsed.value = screenWidth < 550;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    collapsed.value = screenWidth < 550;
  };
});


</script>