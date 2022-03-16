const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", 
        component: () => import("pages/Index.vue") 
      }

    ],
  },
  { 
    name: 'admin',
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    meta: {requireAdmin: true},
    children: [
      {
        name: "admin.index",
        path: "",
        component: () => import("../pages/admin/Index.vue"),
      },
      {
        name: 'admin.administradores',
        path: "administradores",
        component: () => import("../pages/admin/ListarAdministradores.vue"),
      },
      {
        name: 'admin.novo.admin',
        path: "administradores/novo",
        component: () => import("../pages/admin/ManterAdministrador.vue"),
      },
      {
        name: 'admin.editar.admin',
        path: "administradores/editar/:id",
        component: () => import("../pages/admin/ManterAdministrador.vue"),
      },
      {
        name: 'admin.auxiliares',
        path: "auxiliares",
        component: () => import("../pages/admin/auxiliares/ListarAuxiliares.vue"),
      },
      {
        name: 'admin.novo.auxiliar',
        path: "auxiliares/novo",
        component: () => import("../pages/admin/auxiliares/ManterAuxiliar.vue"),
      },
      {
        name: 'admin.editar.auxiliar',
        path: "auxiliares/editar/:id",
        component: () => import("../pages/admin/auxiliares/ManterAuxiliar.vue"),
      },
      {
        name: 'admin.motoristas',
        path: "motoristas",
        component: () => import("../pages/admin/motoristas/ListarMotoristas.vue"),
      },
      {
        name: 'admin.novo.motorista',
        path: "motoristas/novo",
        component: () => import("../pages/admin/motoristas/ManterMotorista.vue"),
      },
      {
        name: 'admin.editar.motorista',
        path: "motoristas/editar/:id",
        component: () => import("../pages/admin/motoristas/ManterMotorista.vue"),
      },

    ]
  },
  { 
    name: 'auxiliar',
    path: "/auxiliar", 
    component: () => import("../pages/auxiliar/Index.vue"),
    meta: {requireAux: true} 
  },
  {
    name: 'motorista', 
    path: "/motorista", 
    component: () => import("../pages/motorista/Index.vue"),
    meta: {requireDriver: true} 
  },
  {
    name: 'login',
    path: "/login",
    component: () => import('../pages/common/Login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/Error404.vue"),
  },
];

export default routes;
