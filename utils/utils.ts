/**
 * Return color for post category
 * @param category
 */
export function getCategoryColorClass(category: string) {
    switch(category.trim()) {
        case 'Cheat Sheet':
            return 'bg-orange-500'
        case 'Javascript':
            return 'bg-mc-persian-rose'
        case 'Nuxt.JS':
            return 'bg-mc-fern'
        case 'Services':
            return 'bg-mc-glacier'
        case 'Random':
            return 'bg-mc-waikawa'
        case 'Docker':
            return 'bg-docker'
        case 'DevOps':
            return 'bg-gray-700'
        case 'Virtualization':
            return 'bg-teal-900'
        case 'OS':
            return 'bg-fuchsia-900'
        case 'Linux':
            return 'bg-yellow-300'
        case 'Raspberry Pi':
            return 'bg-pink-700'
        default:
            return 'bg-black'
    }
}