import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/helloworld/:type(member|sendMessage)",
    name: "Helloworld",
    component: () => import("@/components/HelloWorld"),
    children: [
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
  routes
});

export default router;