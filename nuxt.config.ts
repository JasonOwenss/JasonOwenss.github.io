// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-primevue', '@vueuse/nuxt'],
  primevue: {
    components: {
      include: ['Menu', 'Breadcrumb', 'Divider']
    }
  },
  plugins: [
    "~/plugins/ohvueicons.ts"
  ],
  css: ['primevue/resources/themes/aura-light-purple/theme.css', 'primeicons/primeicons.css'],
  // buildModules: ['@nuxt/typescript-build'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
})
