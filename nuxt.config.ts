import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        STRAPI_URL: process.env.STRAPI_URL,
        GITHUB_API_URL: process.env.GITHUB_API_URL
    },
    app: {
        head: {
            title: 'MogliCodes',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'MogliCodes is a YouTube Channel dedicated to everything fun about web development. You won‘t get in-depth tutorials instead you will see me struggle and fail but eventually succeed. Hopefully.',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
        },
    },
    css: ['~/assets/css/tailwind.css'],
    modules: [
        '@nuxt/content', '@vueuse/nuxt',
    ],
    buildModules: ['@pinia/nuxt'],
    build: {
        transpile: ['@yeger/vue-masonry-wall'],
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    target: 'static',
    content: {
        highlight: {
            theme: 'github-dark',
        }
    },
    nitro: {
        prerender: {
            routes: ['/', '/blog', '/blog/*']
        }
    },
    vite: {
        logLevel: 'info',
        optimizeDeps: {
            include: [
                '@yeger/vue-masonry-wall'
            ]
        }
    },
})
