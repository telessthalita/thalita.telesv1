import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/about', component: () => import('@/pages/About.vue') },
  { path: '/projects', component: () => import('@/pages/Projects.vue') },
  { path: '/contact', component: () => import('@/pages/Contacts.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
