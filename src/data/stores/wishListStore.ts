import { create } from "zustand";
import { ProductModel } from "../productModel";

const store = (set: any) => ({
    wishList: <Array<ProductModel>>[], 
    addToWishList: (product: ProductModel) => {
        set((store: any) => (
            {
                wishList: [...store.wishList, product]
            }
        ))
    }, 
    deleteFromWishList: (id: string) => {
        set((store: any) => ({
            wishList: store.wishList.filter(
                (product: ProductModel) => product.id === id
            )
        }))
    }, 
    setWishList: (wishList: Array<ProductModel>) => {
        set((store: any) => ({
            wishList: wishList
        })) 
    }, 
}) 

export const useWishListStore = create(store)
