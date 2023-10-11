
import { create } from 'zustand'
import { ProductTypeModel } from '../productTypeModel' 
import { ProductCategoryModel } from '../productCategoryModel'
import { ProductSubCategoryModel } from '../productSubCategoryModel'

// 'Electronic Devices',
// 'Electronic Accessories', 
// 'TV & Home Appliances', 
// 'Health & Beauty', 
// 'Babies & Toys', 
// 'Groceries & Pets', 
// 'Home & Living', 
// `Women's Fashion & Accessories`, 
// `Men's Fashion & Accessories`, 
// `Kid's Fashion & Accessories`, 
// 'Sports & Lifestyle', 
// 'Automotive & Motorcycles', 

const store = (set: any) => ({
    productTypes: <Array<ProductTypeModel>>[
        {
            name: 'Electronic Devices', 
            categories: [
                    {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'Electronic Accessories', 
            categories: [
                {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'TV & Home Appliances', 
            categories: [
                {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'Health & Beauty', 
            categories: [
                    {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'Babies & Toys', 
            categories: [
                    {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'Groceries & Pets', 
            categories: [
                    {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'Lorem Ipsum'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
    ]
}) 

export const useProductTypesStore = create(store) 

