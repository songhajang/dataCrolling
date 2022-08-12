import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './index.css'

import Home from './user/DataHome.vue'
import userList from './user/DataGet.vue'
import userProfile from './user/DataGetDetail.vue'
import axios from 'axios'


const routes =[
  {name: 'home', path: '/', component: Home},
  {name: 'user', path: '/user', component: userList},
  {name: 'detail', path: '/user/:userId', component: userProfile},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')


app.config.globalProperties.$axios = axios
