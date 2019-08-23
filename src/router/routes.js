const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "all", component: () => import("pages/AllSensorVoltage.vue") },
      { path: "home3", component: () => import("pages/Home3.vue") },
      { path: "touch", component: () => import("pages/TouchInput.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
