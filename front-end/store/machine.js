import { categories, products } from '@/assets/data'

export const state = () => ({
    filters: categories.map(category => ({...category, applied: false})),
    products: products
})

export const mutations = {
    toggleFilter(state, name) {
        state.filters = state.filters.map(filter => {
            return {
                ...filter,
                applied: name === filter.name ? !filter.applied : filter.applied
            }
        })
    }
}