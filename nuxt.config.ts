// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    shim: false,
    ssr: false,
    dev: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
    i18n: {
        locales: [
            {
              code: 'en',
              file: 'en.json'
            },
            {
              code: 'fr',
              file: 'fr.json'
            },
            {
              code: 'ar',
              file: 'ar.json'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en'
    }
})