
import { create } from 'zustand'
import { ProductModel } from '../productModel'
import { useProductsStore } from './productsStore'

const store = (set: any) => ({
    searchValue: "", 
    searchResults: <Array<ProductModel>>[], 
    setSearchValue: (value: string) => {
        set((store: any) => {
            const products = useProductsStore.getState().products 
            const searchResults = products.filter((product) => {
                // ToDO: Return what value is in the products 
                return product.name.toLowerCase().includes(value.toLowerCase())
            })
            return {
                searchValue: value, 
                searchResults: searchResults
            }
        })
    }, 
    clearSearchValue: () => {
        set((store: any) => {
            return {
                searchValue: ''
            }
        })
    }, 

}) 

export const useSearchResultsStore = create(store) 

