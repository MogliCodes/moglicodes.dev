import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp()

        // If history back
        if (savedPosition) {
            return new Promise((resolve) => {
                nuxtApp.hooks.hookOnce('page:finish', () => {
                    setTimeout(() => resolve(savedPosition), 50)
                })
            })
        }

        // If navigating to a hash
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80 // Account for fixed header
            }
        }

        // For new page loads, scroll to top
        return new Promise((resolve) => {
            nuxtApp.hooks.hookOnce('page:finish', () => {
                setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 100)
            })
        })
    },
}