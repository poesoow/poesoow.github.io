import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainHome",
    component: ()=> import('@/pages/Home')
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import('@/pages/Profile')
  },
  {
    path: "/skill",
    name: "SkillPage",
    component: () => import('@/pages/Skill')
  },
  {
    path: "/work",
    name: "Work",
    component: () => import('@/pages/Work')
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import('@/pages/Contact')
  },
  // 404 페이지 만들기
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  },
  {
    path: "/404",
    component: () => import('@/pages/NotPage')
  }
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router;