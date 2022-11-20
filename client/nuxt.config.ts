/* eslint-disable no-undef */
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["vuetify/lib/styles/main.sass", "~/assets/css/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});