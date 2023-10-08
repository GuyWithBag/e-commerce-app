import { ProductSubCategoryModel } from "./productSubCategoryModel"

export type ProductCategoryModel = {
    name: string, 
    subCategory: ProductSubCategoryModel
}