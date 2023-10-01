import { Box, Button, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import ShoppingCartItemGroup from './components/ShoppingCartItemGroup'
import ShoppingCartItem from './components/ShoppingCartItem'
import HomePageCard from '../../components/HomePageCard'
import ProductCardList from '../../components/ProductCardList'
import ProductCard from '../../components/ProductCard'
import { testProd } from '../../placeholder'

type Props = {}

export default function ShoppingCart({}: Props) {
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
                        <ShoppingCartItem />
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
                <ProductCardList>
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                </ProductCardList>
            </HomePageCard>
            <HomePageCard title='You May Also Like'>
                <ProductCardList>
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                    <ProductCard {...testProd} />
                </ProductCardList>
            </HomePageCard>
        </Box>
    </Box>
  )
}

