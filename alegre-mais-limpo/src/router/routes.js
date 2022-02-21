const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", 
        component: () => import("pages/Index.vue") 
      },
      { 
        name: 'admin',
        path: "/admin", 
        component: () => import("pages/admin/Index.vue"),
        meta: {requireAdmin: true} 
      },
      { 
        name: 'auxiliar',
        path: "/auxiliar", 
        component: () => import("pages/auxiliar/Index.vue"),
        meta: {requireAux: true} 
      },
      {
        name: 'motorista', 
        path: "/motorista", 
        component: () => import("pages/motorista/Index.vue"),
        meta: {requireDriver: true} 
      },

    ],
  },

  {
    name: 'login',
    path: "/login",
    component: () => import('pages/common/Login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
