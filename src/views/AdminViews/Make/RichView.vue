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
} from "naive-ui";
import { ref, onMounted } from "vue";
import type { UploadFileInfo } from 'naive-ui';
import { NotificationCall } from "@/postMsg";
import Vditor from 'vditor';
import 'vditor/dist/index.css';
const vditor = ref<Vditor | null>(null);
const matchAbstract = ref("");
const matchTitle = ref("");
const mathBanner = ref("");
const richRange = ref<[number, number]>([1653723096000, Date.now()]);
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
  console.log("MARKDOWN " + vditor.value?.getValue(), "HTML " + vditor.value?.getHTML());
};
onMounted(() => {
  vditor.value = new Vditor('vditor', {
    toolbar: [
      "emoji",
      "headings",
      "bold",
      "italic",
      "strike",
      "link",
      "|",
      "list",
      "ordered-list",
      "check",
      "outdent",
      "indent",
      "|",
      "quote",
      "line",
      "code",
      "inline-code",
      "insert-before",
      "insert-after",
      "|",
      "upload",
      "table",
      "|",
      "undo",
      "redo",
      "|",
      "fullscreen",
      "edit-mode",
      {
        name: "more",
        toolbar: [
          "both",
          "code-theme",
          "content-theme",
          "export",
          "outline",
          "preview",
          "devtools",
          "info",
          "help",
        ],
      },
    ],
    upload: {
      accept: ['.zip', '.rar', '.7z', '.docx', '.doc', '.avi', '.mp4', '.mov', '.wmv', '.mkv', '.bmp', '.dib', '.png', '.jpg', '.jpeg', '.pbm', '.pgm', '.ppm', '.tif', '.tiff', '.xls', '.xlxs', '.ppt', '.pptx', '.txt'].join(','),
      token: 'test',
      withCredentials: false,
      multiple: false,
      fieldName: "file",
      url: 'https://match.api.yby.zone/assets/richsource/file',
      linkToImgUrl: 'https://match.api.yby.zone/assets/richsource/img/',
      filename(name: string) {
        return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
          replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').
          replace('/\\s/g', '')
      },
    },
    after: () => {

    },
  });
});
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
          <n-upload abstract action="https://match.api.yby.zone/assets/banner" @before-upload="beforeUpload"
            @finish="handleFinish" accept="image/png, image/jpeg" :show-file-list="false">
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
          <div id="vditor" style="min-height:400px;" />
        </n-list-item>
        <n-list-item>
          <n-button @click="CreateRichForm" style="float: right" size="large" type="primary">确认创建</n-button>
        </n-list-item>
      </n-list>
    </n-card>
  </div>
  <n-divider />
</template>