import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {Fn} from '@monrepo/build'
console.log(Fn())
createApp(App).mount('#app')
