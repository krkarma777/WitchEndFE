import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 폴더에서 index.js 파일을 가져옵니다.

// Vue 애플리케이션을 생성하고, 생성된 애플리케이션에 router를 적용합니다.
createApp(App).use(router).mount('#app');
