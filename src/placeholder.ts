import Keyboard from './assets/images/placeholder/keyboard-product.png' 
import Monitor from './assets/images/placeholder/monitor-product.jpg'
import { ProductCategoryModel } from './data/productCategoryModel';

import { ProductModel } from "./data/productModel"; 
import { ProductSubCategoryModel } from './data/productSubCategoryModel';
import { ProductTypeModel } from './data/productTypeModel';

export const gamingKeyboardProduct: ProductModel = {
    thumbnail: Keyboard, 
    images: [
        Keyboard, 
        Keyboard, 
        Keyboard
    ], 
    name : "Gaming Keyboard", 
    description: "lol", 
    price: 100, 
    percentOff: 0.20, 
    brand: "Shein", 
    brandLink: "", 
    productType: {
        name: "Electronic Devices", 
        categories: <Array<ProductCategoryModel>>[
            {
                name: "Computer", 
                subCategories: <Array<ProductSubCategoryModel>>[
                    {
                        name: "Keyboard" 
                    } as ProductSubCategoryModel
                ] 
            } as ProductCategoryModel
        ] 
    } as ProductTypeModel, 
    id: '1367agSG', 
    shop: 'Comica', 
    rating: 7
}

export const gamingMonitorProduct: ProductModel = {
    thumbnail: Monitor, 
    images: [
        Monitor, 
        Monitor, 
        Monitor
    ], 
    name : "Gaming Monitor", 
    description: "lol", 
    price: 100, 
    percentOff: 0.20, 
    brand: "Shein", 
    brandLink: "", 
    productType: {
        name: "Electronic Devices", 
        categories: <Array<ProductCategoryModel>>[
            {
                name: "Computer", 
                subCategories: <Array<ProductSubCategoryModel>>[
                    {
                        name: "Monitor" 
                    } as ProductSubCategoryModel
                ] 
            } as ProductCategoryModel
        ] 
    } as ProductTypeModel, 
    id: 'JDIsaisu12', 
    shop: 'Marvel', 
    rating: 5
}

export const products: ProductModel[] = [
    gamingKeyboardProduct, 
    gamingMonitorProduct, 
    gamingKeyboardProduct, 
    gamingMonitorProduct, 
    gamingKeyboardProduct, 
    gamingMonitorProduct, 
    gamingKeyboardProduct, 
    gamingMonitorProduct, 
]

