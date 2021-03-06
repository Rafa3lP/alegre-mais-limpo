import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ( { store, ssrContext } ) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeResolve((to, from, next) => {
    /*console.log(`autenticado: ${store.getters['auth/isAuthenticated']}`);
    console.log(`nivel de acesso: ${store.getters['auth/getNivelDeAcesso']}`);*/
    if(to.matched.some(record => record.meta.requireLogin) && !store.getters['auth/isAuthenticated']) {
      return next(
        {
          name: 'login', 
          query: {
            to: to.path
          }
        }
      );
    }
    if(to.matched.some(record => record.meta.requireAdmin) && store.getters['auth/getNivelDeAcesso'] != 1) {
      return next(
        {
          name: 'login', 
          query: {
            to: to.path
          }
        }
      );
    }
    if(to.matched.some(record => record.meta.requireAux) && store.getters['auth/getNivelDeAcesso'] != 2) {
      return next(
        {
          name: 'login', 
          query: {
            to: to.path
          }
        }
      );
    }
    if(to.matched.some(record => record.meta.requireDriver) && store.getters['auth/getNivelDeAcesso'] != 3) {
      return next(
        {
          name: 'login', 
          query: {
            to: to.path
          }
        }
      );
    }
    return next();
  });

  return Router;
});
