import { createRouter, createWebHashHistory } from 'vue-router';
import TaskPage from '@/pages/TaskPage';
import TaskChoosePage from '@/pages/TaskChoosePage';

const routes = [
  {
    path: '/',
    component: TaskPage,
  },
  {
    path: '/tasks/:id',
    component: TaskChoosePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
