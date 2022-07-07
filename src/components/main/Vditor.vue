<script setup lang="ts">
import { ref, onMounted } from "vue";
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import sha1 from "sha1";
export interface API {
  GetValue: (type: string) => string;
}
defineExpose<API>({
  GetValue(type: string): string {
    if (type == 'html')
      return vditor.value?.getHTML() as string;
    else if (type == 'md')
      return vditor.value?.getValue() as string;
    else return '404';
  }
})
const vditor = ref<Vditor | null>(null);
const salt: string = Math.random().toString(36).slice(-6);
onMounted(() => {
  vditor.value = new Vditor('vditor', {
    height: 400,
    outline: {
      enable: true,
      position: "left"
    },
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
      headers: {
        Authorization: sha1(['MatchGo', String(Date.now()), salt].join("#")),
        Sid: 'MatchGo',
        When: String(Date.now()),
        Salt: salt,
      },
      url: 'https://match.api.yby.zone/assets/richsource/file',
      linkToImgUrl: 'https://match.api.yby.zone/assets/richsource/img',
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
  <div id="vditor"></div>
</template>