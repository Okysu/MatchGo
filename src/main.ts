import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'
import App from "./App.vue";
import router from "./router";

const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");