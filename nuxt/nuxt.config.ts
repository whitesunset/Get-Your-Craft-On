// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/variables.scss",
    "~/assets/scss/bootstrap.scss",
  ],
  modules: ["@vueuse/nuxt", "@nuxtjs/sanity"],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
    useCdn: process.env.SANITY_STUDIO_USE_CDN,
  },
  vendor: ["jquery", "bootstrap"],
  plugins: [],
  app: {
    head: {
      script: [
        {
          src: "/assets/js/vendor/modernizr-3.6.0.min.js",
          tagPosition: "bodyOpen",
        },
        {
          src: "/assets/js/vendor/jquery-3.6.0.min.js",
          tagPosition: "bodyOpen",
        },
        {
          src: "/assets/js/vendor/jquery-migrate-3.3.0.min.js",
          tagPosition: "bodyOpen",
        },
        { 
          src: "/assets/js/vendor/bootstrap.bundle.min.js", 
          tagPosition: "bodyOpen" 
        },
        { 
          src: "/assets/js/plugins/jquery.countdown.js", 
          tagPosition: "bodyOpen" 
        },
      ]
    }
  }
  //       {
  //         src: "/assets/js/plugins/jquery.syotimer.min.js",
  //         tagPosition: "bodyClose",
  //       },
  //       { src: "/assets/js/plugins/wow.js", tagPosition: "bodyClose" },
  //       { src: "/assets/js/plugins/jquery-ui.js", tagPosition: "bodyClose" },
  //       {
  //         src: "/assets/js/plugins/perfect-scrollbar.js",
  //         tagPosition: "bodyClose",
  //       },
  //       {
  //         src: "/assets/js/plugins/magnific-popup.js",
  //         tagPosition: "bodyClose",
  //       },
  //       { src: "/assets/js/plugins/select2.min.js", tagPosition: "bodyClose" },
  //       { src: "/assets/js/plugins/waypoints.js", tagPosition: "bodyClose" },
  //       { src: "/assets/js/plugins/counterup.js", tagPosition: "bodyClose" },
  //       {
  //         src: "/assets/js/plugins/jquery.countdown.min.js",
  //         tagPosition: "bodyClose",
  //       },
  //       {
  //         src: "/assets/js/plugins/images-loaded.js",
  //         tagPosition: "bodyClose",
  //       },
  //       { src: "/assets/js/plugins/isotope.js", tagPosition: "bodyClose" },
  //       { src: "/assets/js/plugins/scrollup.js", tagPosition: "bodyClose" },
  //       {
  //         src: "/assets/js/plugins/jquery.vticker-min.js",
  //         tagPosition: "bodyClose",
  //       },
  //       {
  //         src: "/assets/js/plugins/jquery.theia.sticky.js",
  //         tagPosition: "bodyClose",
  //       },
  //       {
  //         src: "/assets/js/plugins/jquery.elevatezoom.js",
  //         tagPosition: "bodyClose",
  //       },
  //       { src: "/./assets/js/main.js?v=3.4", tagPosition: "bodyClose" },
  //       { src: "/./assets/js/shop.js?v=3.4", tagPosition: "bodyClose" },
  //     ],
  //   },
  // },
});
