import { defineStore } from 'pinia'


    const  state = () => ({
        isDark: false
    })

    const getters = {
        isDarkMode: (state) => state.isDark
    }

export const useDarkMode = defineStore('darkMode', {
    state,
    getters,
    actions: {
        setIsDark(bool) {
            this.isDark = bool
            document.body.classList.toggle('dark')
        }
    }
})