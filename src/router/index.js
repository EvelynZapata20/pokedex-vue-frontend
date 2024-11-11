import { createRouter, createWebHistory } from 'vue-router';
import QuoteView from '../views/QuoteView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes = [
  { path: '/', name: 'QuoteView', component: QuoteView },
  { path: '/profile', name: 'ProfileView', component: ProfileView}
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_URL),
  routes
});

export default router;
