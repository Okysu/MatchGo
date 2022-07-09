<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { NGrid, NGi, NCard, NBlockquote, NDivider, NButton, NScrollbar } from "naive-ui";
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
  "date": [Date.now() - 10000, Date.now() + 20000000],
  "abstract": "随便说说",
  "content": "<button>213123123</button>",
});
onMounted(() => {
  type.value = Route.query.type as string;
  screenWidth = document.body.clientWidth;
  listCols.value = screenWidth > 550 ? 2 : 1;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    listCols.value = screenWidth > 550 ? 2 : 1;
  };
  instance.post('/match/info', {
  })
    .then(function (response: any) {
      matchInfo.value.content = response.data.content;
    });
});

</script>

<template>
  <n-scrollbar>
    <div style="width: 96%; padding-left: 2%; padding-top: 25px">
      <n-grid x-gap="5" :cols="listCols">
        <n-gi>
          <n-card title="比赛详情">
            <template #header-extra>
              <n-button>确认提交</n-button>
            </template>
            <div style="width: 96%; padding-left: 2%; ">
              <n-blockquote align-text>
                {{ matchInfo.name }}
              </n-blockquote>
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
        </n-gi>
        <n-gi>
          <edit style="min-height: 100%;" ref="editor">
          </edit>
        </n-gi>
      </n-grid>
      <n-divider />
    </div>
  </n-scrollbar>
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