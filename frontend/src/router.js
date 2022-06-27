import { createWebHistory, createRouter } from "vue-router";
import homepage from "./views/homepage";
import about from "./views/about";
import deletepage from "./views/delete";
import createpage from "./views/create";
import updatepage from "./views/update";

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
    path: "/create",
    component: createpage,
  },
  {
    path: "/delete/:id",
    component: deletepage,
    props: true,
  },
  {
    path: "/update/:id",
    component: updatepage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
