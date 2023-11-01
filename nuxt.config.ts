// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: URL + "themes/lara-light-teal/theme.css",
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ["nuxt-primevue", "@unocss/nuxt", "@nuxtjs/supabase"],
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
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: [],
    },
  },
  css: [
    "~/assets/theme.css",
    "~/assets/main.css",
    // "primevue/resources/themes/lara-dark-teal/theme.css",
    // "primevue/resources/themes/lara-light-teal/theme.css",
  ],
});
