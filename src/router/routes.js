import Home from "../components/Home.vue";
import Product from "../components/Product.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
  },
  //
];
