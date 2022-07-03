<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  NDivider,
  NScrollbar,
  NThing,
  NList,
  NListItem,
  NButton,
  NInput,
  NSelect,
  NGrid,
  NGi,
  NBadge,
} from "naive-ui";
let screenWidth = document.body.clientWidth;
const listCols = ref(2);
const typeValue = ref("功能建议");
const mxValue = ref("低");
const conValue = ref("");
const type = [
  { label: "功能建议", value: "suggestion" },
  { label: "举报反馈", value: "report" },
  { label: "主动推荐", value: "duty" },
  { label: "申请相关", value: "apply" },
];
const mx = [
  { label: "低", value: "low" },
  { label: "中", value: "middle" },
  { label: "高", value: "high" },
  { label: "特高", value: "max" },
];
onMounted(() => {
  //小屏幕自适应
  screenWidth = document.body.clientWidth;
  listCols.value = screenWidth > 550 ? 2 : 1;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    listCols.value = screenWidth > 550 ? 2 : 1;
  };
});
</script>

<template>
  <n-scrollbar>
    <div style="width: 96%; padding-left: 2%; padding-top: 25px">
      <n-grid x-gap="5" :cols="listCols">
        <n-gi>
          <n-list bordered>
            <template #header> 工单列表 </template>
            <n-list-item>
              <n-thing title="这里会显示你的工单" extra="时间" />
              状态：等待回复
              <template #prefix>
                <n-badge color="green" dot />
              </template>
              <template #suffix>
                <n-button>查看</n-button>
              </template>
            </n-list-item>
          </n-list>
        </n-gi>
        <n-gi>
          <n-list bordered>
            <template #header> 提交工单 </template>
            <n-list-item>
              <n-thing title="选择工单类型" />
              <n-select v-model:value="typeValue" :options="type" />
            </n-list-item>
            <n-list-item>
              <n-thing title="工单优先级" />
              <n-select v-model:value="mxValue" :options="mx" />
            </n-list-item>
            <n-list-item>
              <n-thing title="具体内容" />
              <n-input v-model:value="conValue" type="textarea" placeholder="说出你的诉求！" />
            </n-list-item>
            <n-list-item>
              <n-button style="float: right" size="large" type="primary">确认提交</n-button>
            </n-list-item>
          </n-list>
        </n-gi>
      </n-grid>
    </div>
    <n-divider />
    <br />
  </n-scrollbar>
</template>
