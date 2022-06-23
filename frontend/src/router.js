import { createWebHistory, createRouter } from "vue-router";
import homepage from "./views/homepage";
import about from "./views/about";
import deletepage from "./views/delete";

const routes = [
  {
    path: "/",
    component: homepage,
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/delete/:id",
    component: deletepage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
