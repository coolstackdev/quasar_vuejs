// import { i18n } from "../boot/i18n";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    // beforeEnter(to, from, next) {
    //   const lang = to.params.lang;
    //   if (!["en", "es"].includes(lang)) return next("en");

    //   if (i18n.locale == lang) {
    //     return next();
    //   }

    //   // import(`i18n/${lang}`).then(msg => {
    //   //   i18n.setLocaleMessage(lang, msg.default || msg);
    //   //   i18n.locale = lang;
    //   //   return next();
    //   // });
    // },
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
