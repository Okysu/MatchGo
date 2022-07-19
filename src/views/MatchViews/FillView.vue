<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {
  NGrid, NGi, NCard, NBlockquote, NDivider, NButton, NScrollbar, NLayout,
  NLayoutHeader,
  NLayoutSider,
  NTag
} from "naive-ui";
import { dateFormat, FormatsEnums } from "@/postFunction";
import { instance } from "@/postRequest";
import 'vditor/dist/index.css';
import type { API } from "@/components/main/Vditor.vue";
import edit from "@/components/main/Vditor.vue";
const editor = ref<InstanceType<typeof edit> & API | null>(null);
let screenWidth = document.body.clientWidth;
const listCols = ref(2);
const Route = useRoute();
const type = ref("0");
const matchInfo = ref({
  "name": "测试的比赛",
  "date": [Date.now() - 30000, Date.now() - 10000],
  "abstract": "随便说说",
  "content": "",
});
const collapsed = ref(false);
onMounted(() => {
  type.value = Route.query.type as string;
  screenWidth = document.body.clientWidth;
  collapsed.value = screenWidth < 600;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    collapsed.value = screenWidth < 600;
  };
  instance.post('/match/info', {
  })
    .then(function (response: any) {
      matchInfo.value.content = response.data.content;
    });
});
const fullScreenValue = ref("50%");
const screenNow = ref("全屏");
const fullScreen = () => {
  if (fullScreenValue.value == "50%") {
    fullScreenValue.value = "100%";
    screenNow.value = "半屏";
  }
  else {
    fullScreenValue.value = "50%";
    screenNow.value = "全屏";
  }
}
</script>

<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 44px; padding: 12px; text-align: center; position: fixed" bordered>
      {{ matchInfo.name }}
    </n-layout-header>
    <n-layout position="absolute" style="top: 44px" has-sider>
      <n-layout-sider content-style="padding: 0px;" :native-scrollbar="false" collapse-mode="transform"
        :collapsed-width="0" :width="fullScreenValue" bordered show-trigger="bar" :collapsed="collapsed"
        @collapse="collapsed = true" @expand="collapsed = false">
        <n-card title="比赛详情">
          <template #header-extra>
            <n-tag style="margin:5px" v-if="Date.now() > matchInfo.date[0] && Date.now() < matchInfo.date[1]"
              type="success">
              进行中
            </n-tag>
            <n-tag v-if="Date.now() > matchInfo.date[1]" style="margin:5px" type="error">
              已结束
            </n-tag>
            <n-tag v-if="Date.now() < matchInfo.date[0]" style="margin:5px" type="info">
              未开始
            </n-tag>
            <n-button style="margin:5px" :disabled="Date.now() < matchInfo.date[0] || Date.now() > matchInfo.date[1]">
              确认提交</n-button>
            <n-button style="margin:5px" @click="fullScreen">{{ screenNow }}</n-button>
          </template>
          <div style="width: 96%; padding-left: 2%; height: 100%; overflow: auto; ">
            <n-blockquote align-text>
              {{ dateFormat(matchInfo.date[0], FormatsEnums.YMDHIS) + ' - ' + dateFormat(matchInfo.date[1],
                  FormatsEnums.YMDHIS)
              }}
            </n-blockquote>
            <n-blockquote align-text>
              {{ matchInfo.abstract }}
            </n-blockquote>
            <div class="vditor-reset" id="content" v-html="matchInfo.content" v-highlight></div>
          </div>
        </n-card>
      </n-layout-sider>
      <n-layout content-style="top: 44px; overflow: hidden;">
        <edit style="min-height: 100vh;" ref="editor">
        </edit>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style>
a {
  color: rgb(172, 239, 202);
  text-decoration: none;
}

a:hover {
  background-color: rgb(172, 239, 202);
  color: white;
  font-style: italic;
}
</style>