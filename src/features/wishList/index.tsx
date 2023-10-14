import { Box, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import ProductCardList from '../../components/ProductCardList'
import { gamingKeyboardProduct } from '../../placeholder'
import ProductCard from '../../components/ProductCard'
import { useWishListStore } from '../../data/stores/wishListStore'
import { ProductModel } from '../../data/productModel'
import DeleteFromWishList from './components/DeleteFromWishList'
import Header from './components/Header'

type Props = {}

export default function WishList({}: Props) {

  const wishList: ProductModel[] = useWishListStore((task: any) => task.wishList)

  return (
    <Box className='flex flex-row min-h-screen'>

      {/* Personal center??  */}
      <Box>

      </Box>

      <Box className='flex flex-col gap-3'>
        <Heading>My Wishlist</Heading>
        <Header /> 
        <ProductCardList columns={5}>
          {
            wishList.map((product: ProductModel) => (
              <ProductCard product={product}>
                <DeleteFromWishList product={product} /> 
              </ProductCard>
            ))
          }
        </ProductCardList>
      </Box>
    </Box>
  )
}