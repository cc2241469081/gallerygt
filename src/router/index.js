import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/Content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */ '../views/Login/User')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Login/Admin'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next() : next({ name: 'User' })
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  console.log(isLogin)
  const { name } = to
  const Isregorfor = (name === 'User' || name === 'Home');
  (isLogin || Isregorfor) ? next() : next({ name: 'User' })
})
export default router
