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
import AllShoppingCartItems from './components/AllIShoppingCarttems'
import OrderSummary from './components/OrderSummary'
import { useWishListStore } from '../../data/stores/wishListStore'

type Props = {}

export default function ShoppingCart({}: Props) {

    const cart = useCartStore((store: any) => store.cart)
    const wishList = useWishListStore((store: any) => store.wishList)

    function  ifEmpty() {
        if (cart.length === 0) {
            return (
                <Box className='body-secondary flex justify-center items-center w-[100%] h-96 drop-shadow'>
                    <Text>Your shopping cart is empty.</Text>
                </Box>
            )
        }
        return (
            <Box className='grid gap-1 grid-cols-[1.6fr,1fr] max-sm:flex max-sm:flex-col' > 
                <AllShoppingCartItems cart={cart} />
                <OrderSummary cart={cart}/> 
            </Box>
        )
    }

    // ToDo: You have to sort them by their shops
    return (
        <Box className='flex flex-col gap-16'>
            {
                ifEmpty()
            }
            <Box className='flex flex-col gap-8'>
                <HomePageCard title={`From Your Wishlist (${wishList.length})`}>
                    <ProductCardList columns={6} ifEmpty={
                            <Box className='body-secondary flex justify-center items-center w-[100%] h-32 drop-shadow'>
                                <Text>Your wish list is empty.</Text>
                            </Box>
                        }
                    >
                        {
                            wishList.map((product: ProductModel) => (
                                <ProductCard product={product}/>
                            ))
                        }
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

