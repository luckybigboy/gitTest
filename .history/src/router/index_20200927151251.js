import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/helloworld/:type(member|sendMessage)",
    name: "Helloworld",
    component: () => import("@/components/HelloWorld"),
    children: [
      {
        path: '',
        component: () => import('@/components/SuperPush')
      },
      {
        path: 'superPush',
        name: 'SuperPush',
        component: () => import('@/components/SuperPush')
      },
      {
        path: 'memberShip',
        name: 'MemberShip',
        component: () => import('@/components/MemberShip')
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import("@/components/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('to1', to)
    console.log('savedPosition', savedPosition)
    return {x: 0, y: 0}
  }
});

export default router;