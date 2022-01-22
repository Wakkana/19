import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import './assets/cover.css'
const app = createApp(App)
app.use(Antd);
app.use(router)
app.mount('#app')
