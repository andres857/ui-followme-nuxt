// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  devtools: { enabled: true }
})
