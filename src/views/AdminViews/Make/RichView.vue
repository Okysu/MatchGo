<script setup lang="ts">
import {
  NDivider,
  NCard,
  NList,
  NListItem,
  NThing,
  NInput,
  NUpload,
  NButton,
  NUploadTrigger,
  NInputGroup,
  NDatePicker,
  NImage,
} from "naive-ui";
import { ref } from "vue";
import sha1 from "sha1";
import type { UploadFileInfo } from 'naive-ui';
import { NotificationCall } from "@/postMsg";
import type { API } from "@/components/main/Vditor.vue";
import edit from "@/components/main/Vditor.vue";
const matchAbstract = ref("");
const matchTitle = ref("");
const mathBanner = ref("");
const editor = ref<InstanceType<typeof edit> & API | null>(null);
const richRange = ref<[number, number]>([1653723096000, Date.now()]);
const salt = ref(Math.random().toString(36).slice(-6));
const handleFinish = ({
  file,
  event
}: {
  file: UploadFileInfo
  event?: ProgressEvent
}) => {
  const data = JSON.parse((event?.target as XMLHttpRequest).responseText);
  mathBanner.value = data.url;
  return file;
};
const beforeUpload = async (data: {
  file: UploadFileInfo
  fileList: UploadFileInfo[]
}) => {
  salt.value = Math.random().toString(36).slice(-6);
  if (
    data.file.file?.type == "image/png" ||
    data.file.file?.type == "image/jpeg"
  ) {
    return true;
  }
  NotificationCall("error", "上传错误", "我们目前只允许JPG、JPEG和PNG格式图片上传");
  return false;
};
const CreateRichForm = () => {
  if (editor.value) console.log(editor.value.GetValue("html"));
};
</script>

<template>
  <div style="width: 96%; padding-left: 2%; padding-top: 25px">
    <n-card title="创建图文类型比赛">
      <n-list bordered>
        <n-list-item>
          <n-thing title="比赛标题" />
          <n-input v-model:value="matchTitle" type="text" placeholder="请输入比赛标题..." />
        </n-list-item>
        <n-list-item>
          <n-thing title="比赛简介" />
          <n-input v-model:value="matchAbstract" type="textarea" placeholder="请输入比赛简介..." />
        </n-list-item>
        <n-list-item>
          <n-thing title="比赛时间" />
          <n-date-picker v-model:value="richRange" type="datetimerange" clearable />
        </n-list-item>
        <n-list-item>
          <n-thing title="比赛封面" />
          <n-image width="150" :src="mathBanner" />
          <n-upload abstract action="https://match.api.yby.zone/assets/banner" @before-upload="beforeUpload"
            @finish="handleFinish" :headers="{
              'X-Upload-Token': 'test',
              'Authorization': sha1(['MatchGo', String(Date.now()), salt].join('#')),
              'Sid': 'MatchGo',
              'When': String(Date.now()),
              'Salt': salt,
            }" accept="image/png, image/jpeg" :show-file-list="false">
            <n-input-group>
              <n-input v-model:value="mathBanner" type="text" placeholder="你可以使用其他网络图片或者自行上传..." />
              <n-upload-trigger #="{ handleClick }" abstract>
                <n-button @click="handleClick" ghost> 选择文件上传 </n-button>
              </n-upload-trigger>
            </n-input-group>
          </n-upload>
        </n-list-item>
        <n-list-item>
          <n-thing title="比赛具体内容" />
          <edit ref="editor"></edit>
        </n-list-item>
        <n-list-item>
          <n-button @click="CreateRichForm" style="float: right" size="large" type="primary">确认创建</n-button>
        </n-list-item>
      </n-list>
    </n-card>
  </div>
  <n-divider />
</template>