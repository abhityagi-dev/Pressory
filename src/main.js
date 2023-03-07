import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import moment from 'moment';

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(router).mount('#app')

