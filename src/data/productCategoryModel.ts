import { ProductSubCategoryModel } from "./productSubCategoryModel"

export type ProductCategoryModel = {
    name: string, 
    subCategories: Array<ProductSubCategoryModel>
}