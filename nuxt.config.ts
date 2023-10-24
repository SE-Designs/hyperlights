// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@unocss/nuxt"],
  primevue: {
    usePrimeVue: true,
    options: {},
    components: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/themes/lara-light-teal/theme.css",
  ],
});
