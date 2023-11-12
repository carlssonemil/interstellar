import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView,
  },
  {
    path: '/camouflages',
    name: 'camouflages',
    component: () => import('../views/CamouflagesView.vue'),
  },
  {
    path: '/calling-cards',
    name: 'calling-cards',
    component: () => import('../views/CallingCardsView.vue'),
  },
  {
    path: '/mastery',
    name: 'mastery',
    component: () => import('../views/MasteryView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/requirements',
    name: 'requirements',
    component: () => import('../views/RequirementsView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
