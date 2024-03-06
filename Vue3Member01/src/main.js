import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import { Router } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router' //router폴더에 있는 (export한) rout를 가져옴

//기본값은 reateApp(App).mount('#app') 이나 아래로 변경
createApp(App).use(router).mount('#app') //라우터를 써서 앱 생성

import 'bootstrap/dist/js/bootstrap.js'
