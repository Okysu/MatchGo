<script setup lang="ts">
import { NDivider, NCard, NList, NTag } from "naive-ui";
import { useRouter } from "vue-router";
const Router = useRouter();
const ClickTo = (url: string) => {
  Router.push(url);
};
</script>

<template>
    <div style="width: 96%; padding-left: 2%; padding-top: 25px">
      <n-card title="选择要创建的类型">
        <n-list bordered>
          <n-card title="图文类型" @click="ClickTo('./rich')" hoverable>
            适合图文收集、摄影比赛、文章比赛或者是教程分享比赛等时候图文的场景需求。
          </n-card>
          <n-card title="文件类型" @click="ClickTo('./file')" hoverable>
            涉及到文件上传等使用场景的，如编程比赛、活动的材料收集。
          </n-card>
          <n-card title="填空表单" hoverable>
            适合固定题目的考察、活动策划的反馈收集、用户调研等使用场景。
            <template #header-extra>
              <n-tag type="error">
                正在开发
              </n-tag>
            </template>
          </n-card>
        </n-list>
      </n-card>
    </div>
    <n-divider />
    <br />
</template>