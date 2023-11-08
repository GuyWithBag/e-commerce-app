import { ProductCategoryModel } from "./productCategoryModel"

export type ProductTypeModel = {
    name: string, 
    categories: ProductCategoryModel[], 
    image: string, 
}

