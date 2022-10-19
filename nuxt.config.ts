// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/styles/app.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/styles/_dark_theme.scss"',
                },
            },
        },
    },
})
