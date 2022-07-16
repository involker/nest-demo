import { createApp } from 'vue';
import App from './App.vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from "./router";
import * as Api from "./api/index";
const app = createApp(App);
app.config.globalProperties.$api = Api;
app.use(router)
app.use(ArcoVue)
app.use(Api)
app.mount('#app')
