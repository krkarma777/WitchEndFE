import { createRouter, createWebHistory } from 'vue-router';

// 각각의 경로에 해당하는 컴포넌트를 import 합니다.
import UserForm from '../views/UserForm.vue';

// createRouter 함수를 사용하여 Vue Router를 생성합니다.
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserForm },
  ]
});

export default router;
