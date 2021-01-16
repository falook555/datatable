import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from "vue-axios";
import axios from "axios";

import vPage from 'v-page';

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .use(vPage)
    .mount('#app')
