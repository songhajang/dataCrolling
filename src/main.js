import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import './index.css'

import Home from './user/DataHome.vue'
import get from './user/DataGet.vue'
import detail from './user/DataGetDetail.vue'
import axios from 'axios'


const routes =[
  {name: 'home', path: '/', component: Home},
  {name: 'user', path: '/user', component: get},
  {name: 'detail', path: '/user/detail/:userId?', component: detail},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')


app.config.globalProperties.$axios = axios
