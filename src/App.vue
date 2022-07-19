<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { NNotificationProvider } from "naive-ui";
//引入通知组件
import NotificationAPI from "@/components/main/NotificationAPI.vue";
emits: ["pointerenter", "pointerleave"];
const handleShowNotification = (type: string, title: string, message: string, duration: number = 1000) => {
  if (type == "success") {
    window.$notification.success({
      content: title,
      meta: message,
      duration: duration,
    })
  }
  if (type == "info") {
    window.$notification.info({
      content: title,
      meta: message,
      duration: duration,
    })
  }
  if (type == "warning") {
    window.$notification.warning({
      content: title,
      meta: message,
      duration: duration,
    })
  }
  if (type == "error") {
    window.$notification.error({
      content: title,
      meta: message,
      duration: duration,
    })
  }
};
onMounted(() => {
  //注册message监听事件
  window.addEventListener("message", (e) => {
    const message: string[] = e.data.toString().split(",");
    if (message[0] == "NotificationCaller") {
      handleShowNotification(message[1], message[2], message[3], Number(message[4]));
    }
  });
});
</script>

<template>
  <n-notification-provider placement="top">
    <NotificationAPI />
  </n-notification-provider>
  <RouterView />

</template>
<style>
#root,
body,
html {
  height: 100%;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>