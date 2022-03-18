import { createRouter, createWebHistory } from "vue-router";
/**
 * 定义路由数组
 */
const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: '/home',
        name: 'home',
        component: ()=>import('../views/home/index.vue')
    },
];
 
/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
/**
 * 输出对象
 */
export default router;