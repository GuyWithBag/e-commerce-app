
import { create } from 'zustand'
import { ProductTypeModel } from '../productTypeModel' 

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
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
        {
            name: 'Electronic Accessories', 
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
        {
            name: 'TV & Home Appliances', 
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
        {
            name: 'Health & Beauty', 
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
        {
            name: 'Babies & Toys', 
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
        {
            name: 'Groceries & Pets', 
            category: {
                name: 'Lorem Ipsum', 
                subCategory: {
                    name: 'Lorem Ipsum'
                }
            }
        }, 
    ]
}) 

export const useProductTypesStore = create(store) 

