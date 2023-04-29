import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from "@/store/store";
import './assets/index.scss'


const app = createApp(App);
app
    .use(router)
    .use(store)
    .mount('#app')



