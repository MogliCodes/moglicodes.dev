// @ts-ignore
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            githubApiUrl: process.env.NUXT_GITHUB_API_URL
        }
    },
    app: {
        head: {
            title: 'MogliCodes',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'MogliCodes is a YouTube Channel dedicated to everything fun about web development. You won‘t get in-depth tutorials instead you will see me struggle and fail but eventually succeed. Hopefully.',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
        },
    },
    css: ['~/assets/css/tailwind.css'],
    modules: ['@nuxt/content', '@vueuse/nuxt', "@nuxtjs/tailwindcss"],
    build: {
        transpile: ['@yeger/vue-masonry-wall'],
        // @ts-ignore
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