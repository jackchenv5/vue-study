import 'uno.css';
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';

const app = createApp(App);

setupRouter(app);

app.mount("#app");

