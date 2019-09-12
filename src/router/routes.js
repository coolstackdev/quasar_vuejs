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
      {
        path: "allvolt",
        component: () => import("pages/AllSensorVoltage.vue")
      },
      { path: "allmc", component: () => import("pages/AllMcPercentage.vue") },
      { path: "home3", component: () => import("pages/Home3.vue") },
      { path: "home2", component: () => import("pages/Home2.vue") },
      { path: "main", component: () => import("pages/MainMenu.vue") },
      { path: "about", component: () => import("pages/About.vue") },
      { path: "password", component: () => import("pages/Password.vue") },
      { path: "alarms", component: () => import("pages/Alarms.vue") },
      { path: "alarmlog", component: () => import("pages/AlarmLog.vue") },
      { path: "alarmsetup", component: () => import("pages/AlarmSetup.vue") },
      { path: "touch", component: () => import("pages/TouchInput.vue") },
      {
        path: "calculationresults",
        component: () => import("pages/CalculationResults.vue")
      },
      {
        path: "calibrationeditor",
        component: () => import("pages/CalibrationDataEditor.vue")
      },
      {
        path: "clibrationentry",
        component: () => import("pages/CalibrationDataEntry.vue")
      },
      {
        path: "dnssetup",
        component: () => import("pages/DnsSetUp.vue")
      },
      {
        path: "encodersetup",
        component: () => import("pages/EncoderSetup.vue")
      },
      {
        path: "calibrationwarning",
        component: () => import("pages/HeadCalibrationWarning.vue")
      }
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
