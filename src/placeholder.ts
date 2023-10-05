import Keyboard from './assets/images/placeholder/keyboard-product.png' 
import Monitor from './assets/images/placeholder/monitor-product.jpg'

import { ProductModel } from "./data/productModel"; 

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
    category: 'keyboard', 
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
    category: 'keyboard', 
    id: 'JDIsaisu12', 
    shop: 'Marvel', 
    rating: 5
}

export const products: ProductModel[] = [
    gamingKeyboardProduct, 
    gamingMonitorProduct
]

