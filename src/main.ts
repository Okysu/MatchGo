import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'
import App from "./App.vue";
import router from "./router";
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App);
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})

app.use(store);
app.use(router);
app.mount("#app");