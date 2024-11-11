import { createRouter, createWebHistory } from 'vue-router';
import InsightView from '../views/InsightView.vue';
import BasicInfoView from '../views/BasicInfoView.vue';

const routes = [
  { path: '/', name: 'InsightView', component: InsightView },
  { path: '/basic-info', name: 'BasicInfoView', component: BasicInfoView}
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_URL),
  routes
});

export default router;
