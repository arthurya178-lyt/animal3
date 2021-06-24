import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bulma from '../public/bulma/css/bulma.css';
import fontAwesome from '../public/fontawesome/css/all.css'

createApp(App).use(fontAwesome).use(bulma).use(router).mount('#app')
