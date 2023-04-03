import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainHome",
    component: () => import('@/pages/HomePage')  //.vue는 생락됨
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: () => import('@/pages/Aboutme')
  },
  {
    path: "/project",
    name: "Project",
    component: () => import('@/pages/Project')
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
