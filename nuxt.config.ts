// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    shim: false,
    ssr: false,
    dev: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
    i18n: {
      locales: [
        {
          code: 'ar',
          name: 'العربية',
          dir: 'rtl',
          iso: 'ar-MR',
          file: 'ar-MR.json',
        },
        {
          code: 'en',
          name: 'English',
          dir: 'ltr',
          iso: 'en-MR',
          file: 'en-MR.json',
        },
        {
          code: 'fr',
          name: 'Francais',
          dir: 'ltr',
          iso: 'fr-MR',
          file: 'fr-MR.json',
        },
      ],
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'en'
    }
})