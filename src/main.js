import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import elementui from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App).use(store).use(router).use(elementui).use(Vant).mount('#app')
