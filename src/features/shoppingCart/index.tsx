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

type Props = {}

export default function ShoppingCart({}: Props) {

    const cart = useCartStore((store: any) => store.cart)

    return (
        <Box className='flex flex-col gap-16'> 
            <Box className='grid gap-1' style={{
                gridTemplateColumns: '1.6fr 1fr'
            }}> 
                <Box className='flex flex-col gap-2'>
                    <Box className='bg-white p-4'>
                        <Box className='flex flex-row justify-between'>
                            <span  className='flex flex-row gap-2' >
                                <Radio />
                                <Text>All items (2)</Text> 
            
                            </span>
                        </Box>
                    </Box>
                    <Box className='flex flex-col gap-1'>
                        {/* Shopping cart items here */}
                        <ShoppingCartItemGroup group={'Shein'}>
                            {
                                cart.map((cartItem: ShoppingCartItemModel, index: number) => (
                                        <ShoppingCartItem cartItem={cartItem} />
                                ))
                            }
                        </ShoppingCartItemGroup>
                    </Box>
                </Box>
                <Box className='flex flex-col gap-3'>
                    <Box className='flex flex-col bg-white drop-shadow p-4'>
                        <Box>
                            <Text>Order Summary</Text>
                        </Box>
                        <Box className='flex flex-col gap-2'>
                            <Text>$100</Text>
                            <Text>Already Saved</Text>
                            <Text>Reward 12 ShopIt points</Text>
                            <Button>Checkout Now (2)</Button>
                        </Box>
                    </Box>
                    <Box className='flex flex-col bg-white drop-shadow p-4'>
                        <Box>We Accept</Box>
                        <Box className='grid grid-cols-6'>
                            {/* Credit cards here */}
                        </Box>
                    </Box>
                </Box>
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

