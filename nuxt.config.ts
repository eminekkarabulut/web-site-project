export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-bootstrap-icons", "vue3-carousel-nuxt"],
  css: ["~/assets/style.css", "bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Web Project",
      charset: "utf-8",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
  },
  plugins: ["~/plugins/lottie.client.ts"],
  buildModules: ["nuxt-gsap"],
});
