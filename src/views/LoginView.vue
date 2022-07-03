<script setup lang="ts">
//引入naive-ui组件
import {
  NTabs,
  NCard,
  NButton,
  NInput,
  NTabPane,
  NForm,
  NFormItem,
  NA,
  NCheckbox
} from "naive-ui";
//引入router
import { useRouter } from "vue-router";
//引入store
import { useStatusStore } from "@/stores/status";
import { NotificationCall } from "@/postMsg";
//引入加密
import { instance } from "@/postRequest";
//表单Ref
import { ref } from "vue";
import type { FormInst, FormItemRule } from "naive-ui";
//const or let 初始化
const Notification = NotificationCall;
const Router: any = useRouter();
let Store: any = null;
Store = useStatusStore();
const LoginLoading = ref(false);
const RegLoading = ref(false);
const TabsRef = ref("signin");
const OptionsChange = () => {
  if (TabsRef.value == "signin") {
    TabsRef.value = "signup";
  } else {
    TabsRef.value = "signin";
  }
};
const LoginChecked = ref(false);
const RegChecked = ref(false);
const LoginFormRef = ref<FormInst | null>(null);
const LoginRef = ref(
  {
    id: '',
    password: '',
  }
);
const LoginRules = {
  id: [{
    required: true,
    message: '请输入你的账号',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: "长度在 3 到 20 个字符",
    trigger: "blur",
  }],
  password: [{
    required: true,
    message: '请输入你的密码',
    trigger: 'blur'
  },
  {
    min: 8,
    max: 20,
    message: "长度在 8 到 20 个字符",
    trigger: "blur",
  }]
};
const LoginCheck = (e: MouseEvent) => {
  e.preventDefault();
  LoginFormRef.value?.validate((errors) => {
    if (!errors && LoginChecked.value) {
      const { id, password } = LoginRef.value;
      LoginLoading.value = true;
      instance.get('/', {
        params: {
          'id': id,
          'password': password
        }
      })
        .then(function (response: any) {
          console.log(response);
          Store.Login(true);
          Router.push('/admin');
        })
        .catch(function (error: any) {
          console.log(error);
          LoginLoading.value = false;
          Notification("error", "登录失败", "网络波动不佳或者服务器暂时维护...");
        });
    } else {
      Notification("error", "登录失败", "请根据错误提示进行修正或同意相关协议许可...");
    }
  })
}
const RegFormRef = ref<FormInst | null>(null);
const RegRef = ref(
  {
    name: '',
    password: '',
    repassword: '',
    mail: '',
  }
);
const handlePasswordInput = () => {
  if (RegRef.value.repassword) {
    RegFormRef.value?.validate();
  }
};
const RegRules = {
  name: [{
    required: true,
    message: '请输入你的昵称',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 20,
    message: "长度在 3 到 20 个字符",
    trigger: "blur",
  }],
  password: [{
    required: true,
    message: '请输入你的密码',
    trigger: 'blur'
  },
  {
    min: 8,
    max: 20,
    message: "长度在 8 到 20 个字符",
    trigger: "blur",
  }],
  repassword: [{
    required: true,
    trigger: ['blur', 'password-input'],
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('请输入你的密码');
      } else if (value === RegRef.value.password) {
        return new Error('两次密码不一致');
      }
    },
  }],
  mail: [{
    required: true,
    trigger: 'blur',
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('请输入你的邮箱');
      } else if (!/^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/.test(value)) {
        return new Error('请输入合法的邮箱地址');
      }
      return true
    }
  }]
};
const RegisterCheck = (e: MouseEvent) => {
  e.preventDefault();
  RegFormRef.value?.validate((errors) => {
    if (!errors && RegChecked.value) {
      const { name, password, repassword, mail } = RegRef.value;
      Notification("success", "注册成功", "讲为你自动登录...");
    } else {
      Notification("error", "注册失败", "请根据错误提示进行修正或同意相关协议许可...");
    }
  })
}
</script>

<template>
  <div class="background"></div>
  <n-card :bordered="false" class="box">
    <n-tabs v-model:value="TabsRef" class="card-tabs" default-value="signin" size="large" animated
      style="margin: 0 -4px" pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
      <n-tab-pane name="signin" tab="登录">
        <n-form size="large" ref="LoginFormRef" :model="LoginRef" :rules="LoginRules">
          <n-form-item path="id" label="用户名">
            <n-input v-model:value="LoginRef.id" type="text" placeholder="请输入登录账号..." />
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input v-model:value="LoginRef.password" type="password" placeholder="请输入登录密码..." />
          </n-form-item>
        </n-form>
        <div style="text-align:center;">
          <n-a class="link" @click="OptionsChange">还没有账号？</n-a>
          <br />
          <n-checkbox v-model:checked="LoginChecked" value="Option" size="medium" />&nbsp 同意
          <n-a class="link">用户隐私协议</n-a>和
          <n-a class="link">软件使用协议</n-a>
        </div>
        <br />
        <n-button :loading="LoginLoading" :disabled="LoginLoading" @click="LoginCheck" type="primary" block secondary
          strong>登录</n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form size="large" ref="RegFormRef" :model="RegRef" :rules="RegRules">
          <n-form-item path="name" label="注册昵称">
            <n-input v-model:value="RegRef.name" type="text" placeholder="请输入用户昵称..." />
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input @input="handlePasswordInput" v-model:value="RegRef.password" type="password"
              placeholder="请输入登录密码..." />
          </n-form-item>
          <n-form-item path="repassword" label="重复密码">
            <n-input v-model:value="RegRef.repassword" type="password" placeholder="请再次输入登录密码..." />
          </n-form-item>
          <n-form-item path="mail" label="邮箱地址">
            <n-input v-model:value="RegRef.mail" type="text" placeholder="请输入注册的邮箱..." />
          </n-form-item>
        </n-form>
        <div style="text-align:center;">
          <n-a class="link" @click="OptionsChange">已经有账号了？</n-a>
          <br />
          <n-checkbox v-model:checked="RegChecked" value="Option" size="medium" />&nbsp 同意
          <n-a class="link">用户隐私协议</n-a>和
          <n-a class="link">软件使用协议</n-a>
        </div>
        <br />
        <n-button :loading="RegLoading" :disabled="RegLoading" type="primary" @click="RegisterCheck" block secondary
          strong>注册</n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}

@media only screen and (min-width: 550px) {
  .background {
    -webkit-filter: brightness(0.8);
    -ms-filter: brightness(0.8);
    -moz-filter: brightness(0.8);
    filter: brightness(0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url(https://source.yby.zone/upload/images/1655001503_P15Qqvxb1oe.jpg) center no-repeat;
    background-size: cover;
  }

  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
  }
}

@media only screen and (max-width: 550px) {
  .box {
    width: 100%;
    height: 100%;
  }
}

.link {
  line-height: 35px;
}

.link:hover {
  background-color: rgb(172, 239, 202);
  color: white;
  font-style: italic;
}
</style>