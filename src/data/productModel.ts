// import { Category } from "./category"

import { ProductTypeModel } from "./productTypeModel"

export type ProductModel = {
    thumbnail: string, 
    images: string[], 
    name: string, 
    price: number, 
    description: string, 
    percentOff: number, 
    brand: string, 
    brandLink: string, 
    productType: ProductTypeModel
    id: string, 
    shop: string, 
    rating: number
}

