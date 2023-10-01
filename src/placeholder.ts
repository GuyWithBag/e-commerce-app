import PlaceholderProduct from './assets/images/placeholder/keyboard-product.png' 
import { ProductModel } from "./data/productModel"; 

export let testProd: ProductModel = {
    thumbnail: PlaceholderProduct, 
    images: [
        PlaceholderProduct, 
        PlaceholderProduct, 
        PlaceholderProduct
    ], 
    name : "Gaming Keyboard", 
    description: "lol", 
    price: 100, 
    percentOff: 0.20, 
    brand: "Shein", 
    brandLink: "", 
    category: 'keyboard'
}

