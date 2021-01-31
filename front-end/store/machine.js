import { categories, products } from '@/assets/data'

export const state = () => ({
    filters: categories.map(category => ({...category, applied: false})),
    products: products.map(product => ({...product, showing: true}))
})

export const mutations = {
    toggleFilter(state, name) {
        state.filters = state.filters.map(filter => {
            return {
                ...filter,
                applied: name === filter.name ? !filter.applied : filter.applied
            }
        })

        const activeCategories = state.filters.filter(filter => filter.applied).map(filter => filter.id)

        state.products = state.products.map(product => {
            return {
                ...product,
                showing: activeCategories.length ? activeCategories.includes(product.categoryId) : true
            }
        })
    }
}