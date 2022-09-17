import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import { router } from './router'

const pinia = createPinia()
const head = createHead()

createApp(App).use(head).use(router).use(pinia).mount('#app')
