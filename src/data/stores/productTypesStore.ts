
import { create } from 'zustand'
import { ProductTypeModel } from '../productTypeModel' 
import { ProductCategoryModel } from '../productCategoryModel'
import { ProductSubCategoryModel } from '../productSubCategoryModel'
import Clothing from '../../assets/images/placeholder/clothing.png'

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
            image: Clothing, 
            categories: [
                    {
                    name: 'Lorem Ipsum', 
                    subCategories: [
                        {
                            name: 'uwu'
                        } as ProductSubCategoryModel
                    ]
                } as ProductCategoryModel
            ]
        } as ProductTypeModel, 
        {
            name: 'Electronic Accessories', 
            image: Clothing, 
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
            image: Clothing, 
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
            image: Clothing, 
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
            image: Clothing, 
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
            image: Clothing, 
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
            name: 'Home & Living', 
            image: Clothing, 
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
            name: `Women's Fashion & Accessories`, 
            image: Clothing, 
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
            name: `Men's Fashion & Accessories`, 
            image: Clothing, 
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
            name: `Kid's Fashion & Accessories`, 
            image: Clothing, 
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
            name: 'Sports & Lifestyle', 
            image: Clothing, 
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
            name: 'Automotive & Motorcycles', 
            image: Clothing, 
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

