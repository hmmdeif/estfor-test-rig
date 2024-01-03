import { createApp } from 'vue'
import router from "./router"
import { createPinia } from "pinia"
import { createHead } from "@vueuse/head"
import App from './App.vue'

import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(createHead())
app.use(router)

app.mount('#app')
