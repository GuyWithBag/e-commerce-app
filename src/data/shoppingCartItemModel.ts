import { ProductModel } from "./productModel"

export type ShoppingCartItemModel = {
    product: ProductModel, 
    quantity: number, 
    id: string
}