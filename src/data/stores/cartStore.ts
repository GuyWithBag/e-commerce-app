import { create } from "zustand";
import { ShoppingCartItemModel } from "../shoppingCartItemModel";
import { v4 } from "uuid";
import { ProductModel } from "../productModel";

const store = (set: any) => ({
    cart: <Array<ShoppingCartItemModel>>[], 
    addToCart: (product: ProductModel, quantity: number) => {
        const cartItem: ShoppingCartItemModel = {
            product: product, 
            quantity: quantity, 
            id: v4() 
        }
        set((store: any) => ({
            cart: [...store.cart, cartItem]
        }))
    }, 
    deleteFromCart: (value: ShoppingCartItemModel) => {
        set((store: any) => ({
            cart: store.cart.filter(
                (cartItem: ShoppingCartItemModel) => {
                    // if (cartItem.id !== id) {
                        // alert(cartItem.product.name)
                        // alert(cartItem.id)
                        // alert(value.id)
                    // }
                    return cartItem.id !== value.id
                }
            )
        }))
    }, 
    setCart: (cart: Array<ShoppingCartItemModel>) => {
        set((store: any) => ({
            cart: cart
        })) 
    }, 
}) 

export const useCartStore = create(store)
