import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App);
app.use(createPinia()).use(router).use(ElementPlus)
app.mount('#app')
