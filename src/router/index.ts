import { createRouter, createWebHistory } from "vue-router";
import Shou from "../views/Shou.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/shou",
      name: "shou",
      component: Shou,
      redirect: "/shou/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "faxian",
          name: "faxian",
          component: () => import("../views/Fa.vue"),
        },
        {
          path: "manyou",
          name: "manyou",
          component: () => import("../views/Man.vue"),
        },
        {
          path: "dongtai",
          name: "dongtai",
          component: () => import("../views/Dong.vue"),
        },
        {
          path: "my",
          name: "my",
          component: () => import("../views/My.vue"),
        },
      ],
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/Video.vue"),
    },
    {
      path: "/audio",
      name: "audio",
      component: () => import("../views/Audio.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/Detail.vue"),
    },
    {
      path: "/",
      redirect: "/shou",
    },

    // {
    //   path: "/create",
    //   name: "create",
    //   component: () => import("../views/Create.vue"),
    //   redirect: "/create/home",
    //   children: [
    //     {
    //       path: "home",
    //       name: "create-home",
    //       component: () => import("../views/Home.vue"),
    //     },
    //     {
    //       path: "wzgl",
    //       name: "create-wzgl",
    //       component: () => import("../views/Wzzl.vue"),
    //     },
    //     {
    //       path: "zlgl",
    //       name: "create-zlgl",
    //       component: () => import("../views/Zlgl.vue"),
    //     },
    //     {
    //       path: "fdgl",
    //       name: "create-fdgl",
    //       component: () => import("../views/Fdgl.vue"),
    //     },
    //     {
    //       path: "cz",
    //       name: "create-cz",
    //       component: () => import("../views/Cz.vue"),
    //     },
    //     {
    //       path: "qy",
    //       name: "create-qy",
    //       component: () => import("../views/Qy.vue"),
    //     },
    //   ],
    // },
    // {
    //   path: "/write",
    //   name: "write",
    //   // component: () => import("../views/Write.vue"),
    //   component: Write,
    // },
  ],
});

export default router;
