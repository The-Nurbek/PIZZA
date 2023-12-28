import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../pages/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: "Home",
      component: Home
    },
    {
      path: '/basket',
      name: "Basket",
      component: () => import('../pages/Basket.vue')
    },
    {
      path: '/empty',
      name: "Empty",
      component:  () => import('../pages/Empty.vue')
    }
  ],
});

export default router;