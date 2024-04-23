import { createRouter, createWebHistory } from 'vue-router';

import UserForm from '../views/UserForm.vue';
import LoginForm from '../views/LoginForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserForm },
    { path: '/login', component: LoginForm }
  ],
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, {
          limit: 10240, // 10KB 이하의 파일을 Base64 인코딩
          name: '[name].[hash:8].[ext]',
          outputPath: 'assets/images/', // 출력 경로
          publicPath: 'assets/images/'  // HTML에서 참조될 때의 경로
        }));
  }
});

export default router;
