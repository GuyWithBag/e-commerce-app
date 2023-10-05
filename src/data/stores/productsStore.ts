import { create } from "zustand";
import { ProductModel } from "../productModel";
import { gamingKeyboardProduct, gamingMonitorProduct } from "../../placeholder";

const store = (set: any) => ({
    products: <Array<ProductModel>>[
        gamingKeyboardProduct, 
        gamingMonitorProduct
    ], 
    addToProducts: (product: ProductModel) => {
        set((store: any) => (
            {
                products: [...store.products, product]
            }
        ))
    }, 
    deleteFromProducts: (id: string) => {
        set((store: any) => ({
            products: store.products.filter(
                (product: ProductModel) => product.id === id
            )
        }))
    }, 
    setProducts: (products: Array<ProductModel>) => {
        set((store: any) => ({
            products: products
        })) 
    }, 
}) 

export const useProductsStore = create(store)
