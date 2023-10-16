import { Box, Button, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import ShoppingCartItemGroup from './components/ShoppingCartItemGroup'
import ShoppingCartItem from './components/ShoppingCartItem'
import HomePageCard from '../../components/HomePageCard'
import ProductCardList from '../../components/ProductCardList'
import ProductCard from '../../components/ProductCard'
import { gamingKeyboardProduct } from '../../placeholder'
import { useCartStore } from '../../data/stores/cartStore'
import { ProductModel } from '../../data/productModel'
import { ShoppingCartItemModel } from '../../data/shoppingCartItemModel'
import AllItems from './components/AllIShoppingCarttems'
import OrderSummary from './components/OrderSummary'

type Props = {}

export default function ShoppingCart({}: Props) {

    const cart = useCartStore((store: any) => store.cart)
    let itemsByShops: Map<string, ShoppingCartItemModel> = new Map<string, ShoppingCartItemModel>()

    function organizeItemsByShop(): Map<string, ShoppingCartItemModel> {
        for (let i = 0; i < cart.length; i++) {
            const shop = cart[i].shop
            itemsByShops.set(shop, cart[i])
        }
        return itemsByShops
    }
    // ToDo: You have to sort them by their shops
    return (
        <Box className='flex flex-col gap-16'> 
            <Box className='grid gap-1 grid-cols-[1.6fr,1fr] max-sm:flex max-sm:flex-col' > 
                <AllItems itemsByShops={() => organizeItemsByShop()} />
                <OrderSummary /> 
            </Box>
            <Box className='flex flex-col gap-8'>
                <HomePageCard title='From Your Wishlist (5)'>
                    <ProductCardList columns={6}>
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                    </ProductCardList>
                </HomePageCard>
                <HomePageCard title='You May Also Like'>
                    <ProductCardList columns={6}>
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                        <ProductCard product={gamingKeyboardProduct} />
                    </ProductCardList>
                </HomePageCard>
            </Box>
        </Box>
    )
}

