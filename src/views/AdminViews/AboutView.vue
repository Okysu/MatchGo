<script setup lang="ts">
import {
  NDivider,
  NAvatar,
  NCard,
  NThing,
  NList,
  NListItem,
  NA,
} from "naive-ui";
import { ref, onMounted } from "vue";
let screenWidth = document.body.clientWidth;
const avatarSize = ref(200);
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
    <div style="width: 96%; padding-left: 2%; padding-top: 25px">
      <n-card title="关于本系统">
        <div style="text-align: center">
          <n-avatar round :size="avatarSize" src="https://source.yby.zone/upload/images/1655814747_qJUVH6bmzVh.png" />
        </div>
        <n-list bordered>
          <n-list-item>
            <n-thing title="软件名" description="MatchGo" />
          </n-list-item>
          <n-list-item>
            <n-thing title="版本" description="Alpha V1 阿尔法一号 测试版" />
          </n-list-item>
          <n-list-item>
            <n-thing title="开发成员" />
            <n-a href="https://yby.zone" target="_blank">Okysu-一言</n-a>
          </n-list-item>
          <n-list-item>
            <n-thing title="Git仓库" />
            <n-a href="https://github.com/Okysu/MatchGo/" target="_blank">Github仓库</n-a>
            <br />
            <n-a href="https://git.yby.zone/Okysu/MatchGo" target="_blank">小于同学的私有Git仓库</n-a>
          </n-list-item>
          <n-list-item>
            <n-thing title="开源程序" />
            <n-a href="https://v3.cn.vuejs.org/" target="_blank">渐进式前端开发程序 Vue</n-a>
            <br />
            <n-a href="https://www.naiveui.com/" target="_blank">优秀的Vue组件库 NaiveUI</n-a>
            <br />
            <n-a href="https://www.axios-http.cn/" target="_blank">支持Vue的HTTP请求模块 Axios</n-a>
            <br />
            <n-a href="https://www.npmjs.com/package/mitt" target="_blank">支持Vue3的EventBus模块mitt</n-a>
            <br />
            <n-a href="https://fastapi.tiangolo.com/zh/" target="_blank">强大、高并发的PythonAPI框架 FastAPI</n-a>
            <br />
            只在此列出了直接引用的开源程序，所使用的程序中可能还有其他开源程序，就不在此一一列举，十分感谢无数的程序员为开源事业作出的努力。
          </n-list-item>
          <n-list-item>
            <n-thing title="本程序开源协议" />
            <n-a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GPLv3</n-a>
            <br />
            本程序采用GPLv3给予开发者更多的宽容和自由修改的权利，但这不代表在你使用、修改、二次发行时可以不用保留原作者信息、声明修改内容等，请严格遵守GPLv3的协议，为了开源环境的茁壮成长，本协议还要求，你在使用、修改、二次发行本程序时需要使用同样的协议——即GPLv3。
          </n-list-item>
          <n-list-item>
            <n-thing title="此版本发行日期" description="2022年7月3日" />
          </n-list-item>
        </n-list>
      </n-card>
    </div>
    <n-divider />
</template>