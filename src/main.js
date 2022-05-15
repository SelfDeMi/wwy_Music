import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// import ElementUI from 'element-ui'  //vue3 用的是elementPulse
 const app = createApp(App)
    app.use(router)
    app.use(store)
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.mount('#app')
    
