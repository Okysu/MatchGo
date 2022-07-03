<script setup lang="ts">
import {
  NDivider,
  NScrollbar,
  NAvatar,
  NPopover,
  NCard,
  NThing,
  NList,
  NListItem,
  NButton,
  NInput,
  NDatePicker,
  NSelect,
  NCheckbox,
} from "naive-ui";
import { ref, onMounted } from "vue";
import { NotificationCall } from "@/postMsg";
let screenWidth = document.body.clientWidth;
const avatarSize = ref(200);
const inStamp = ref(new Date().getTime());
const birthStamp = ref(new Date().getTime());
const sexValue = ref("男");
const notieValue = ref(false);
const numValue = ref("test");
const nickValue = ref("昵称");
const areaValue = ref("中国");
const mailValue = ref("yby@ecanse.com");
const inDisabled = (ts: number) => {
  return new Date(ts).getTime() > new Date().getTime();
};
const sex = [
  { label: "男", value: "boy" },
  { label: "女", value: "girl" },
];
onMounted(() => {
  //小屏幕自适应
  screenWidth = document.body.clientWidth;
  avatarSize.value = screenWidth / 3 > 140 ? 140 : screenWidth / 3;
  window.onresize = () => {
    screenWidth = document.body.clientWidth;
    avatarSize.value = screenWidth / 3 > 140 ? 140 : screenWidth / 3;
  };
});
</script>

<template>
  <n-scrollbar>
    <div style="width: 96%; padding-left: 2%; padding-top: 25px">
      <n-card title="个人资料设置">
        <div style="text-align: center">
          <n-popover trigger="hover" placement="bottom">
            <template #trigger>
              <n-avatar round :size="avatarSize" src="https://source.yby.zone/tx.jpg" />
            </template>
            <span>更换头像</span>
          </n-popover>
        </div>
        <n-list bordered>
          <n-list-item>
            <n-thing title="学号" />
            <n-input v-model:value="numValue" type="text" placeholder="基本的 Input" />
          </n-list-item>
          <n-list-item>
            <n-thing title="昵称" />
            <n-input v-model:value="nickValue" type="text" placeholder="基本的 Input" />
          </n-list-item>
          <n-list-item>
            <n-thing title="性别" />
            <n-select v-model:value="sexValue" :options="sex" />
          </n-list-item>
          <n-list-item>
            <n-thing title="出生年月" />
            <n-date-picker :is-date-disabled="inDisabled" v-model:value="birthStamp" type="date" clearable />
          </n-list-item>
          <n-list-item>
            <n-thing title="入学年份" />
            <n-date-picker :is-date-disabled="inDisabled" v-model:value="inStamp" type="year" clearable />
          </n-list-item>
          <n-list-item>
            <n-thing title="地区" />
            <n-input v-model:value="areaValue" type="text" placeholder="基本的 Input" />
          </n-list-item>
          <n-list-item>
            <n-thing title="邮箱" />
            <n-input v-model:value="mailValue" type="text" placeholder="基本的 Input" />
            <br />
            <n-checkbox v-model:checked="notieValue"> 开启邮件通知 </n-checkbox>
          </n-list-item>
          <n-list-item>
            <n-button style="float: right" size="large" type="primary">确认修改</n-button>
          </n-list-item>
        </n-list>
      </n-card>
    </div>
    <n-divider />
    <br />
  </n-scrollbar>
</template>