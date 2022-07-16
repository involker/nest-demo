import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from) => {
  const token = window.localStorage.getItem("token");
  if (token) return true;
  if(to.meta.noLogin) return true;
  return {
    path: "login"
  }
})
export default router;