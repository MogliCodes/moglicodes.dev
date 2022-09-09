import { defineStore } from "pinia";

const state = () => ({
    isActive: true
})

const getters = {
    isOverlayActive: (state) => state.isActive
}

export const useOverlayStore = defineStore('overlay', {
    state,
    getters,
    actions: {
        setIsActive(bool) {
            this.isActive = bool
        }
    }
})