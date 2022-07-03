<template>
  <n-result class="box" status="404" title="404 资源不存在" :description="Msg">
    <template #footer>
      <n-button @click="back" size="large" round>返回上一页</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import {
  NResult,
  NButton
} from "naive-ui";
import { ref } from "vue";
import { getHitokoto } from "@/postRequest";
const back = () => {
  window.history.back();
};
const Msg = ref("少女祈祷中...");
getHitokoto().then(res => {
  Msg.value = res;
});
</script>

<style scoped>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>