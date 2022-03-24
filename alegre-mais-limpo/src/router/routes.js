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
      //Administradores
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
      //Auxiliares
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
      //Motoristas
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
      //Caminhões
      {
        name: 'admin.caminhoes',
        path: "caminhoes",
        component: () => import("../pages/admin/caminhoes/ListarCaminhoes.vue"),
      },
      {
        name: 'admin.novo.caminhao',
        path: "caminhoes/novo",
        component: () => import("../pages/admin/caminhoes/ManterCaminhoes.vue"),
      },
      {
        name: 'admin.editar.caminhao',
        path: "caminhoes/editar/:id",
        component: () => import("../pages/admin/caminhoes/ManterCaminhoes.vue"),
      },
      //Manutenções
      {
        name: 'admin.manutencoes',
        path: "manutencoes",
        component: () => import("../pages/admin/manutencoes/ListarManutencao.vue"),
      },
      {
        name: 'admin.nova.manutencao',
        path: "manutencoes/novo",
        component: () => import("../pages/admin/manutencoes/ManterManutencao.vue"),
      },
      {
        name: 'admin.editar.manutencao',
        path: "manutencoes/editar/:id",
        component: () => import("../pages/admin/manutencoes/ManterManutencao.vue"),
      },
      //Abastecimentos
      {
        name: 'admin.abastecimentos',
        path: "abastecimentos",
        component: () => import("../pages/admin/abastecimentos/ListarAbastecimentos.vue"),
      },
      {
        name: 'admin.novo.abastecimento',
        path: "abastecimentos/novo",
        component: () => import("../pages/admin/abastecimentos/ManterAbastecimento.vue"),
      },
      {
        name: 'admin.editar.abastecimento',
        path: "abastecimentos/editar/:id",
        component: () => import("../pages/admin/abastecimentos/ManterAbastecimento.vue"),
      },
      //Zonas
      {
        name: 'admin.zonas',
        path: "zonas",
        component: () => import("../pages/admin/zonas/ListarZonas.vue"),
      },
      {
        name: 'admin.nova.zona',
        path: "zonas/novo",
        component: () => import("../pages/admin/zonas/ManterZona.vue"),
      },
      {
        name: 'admin.editar.zona',
        path: "zonas/editar/:id",
        component: () => import("../pages/admin/zonas/ManterZona.vue"),
      },
      //Ruas
      {
        name: 'admin.ruas',
        path: "ruas",
        component: () => import("../pages/admin/ruas/ListarRuas.vue"),
      },
      {
        name: 'admin.nova.rua',
        path: "ruas/novo",
        component: () => import("../pages/admin/ruas/ManterRua.vue"),
      },
      {
        name: 'admin.editar.rua',
        path: "ruas/editar/:id",
        component: () => import("../pages/admin/ruas/ManterRua.vue"),
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
