import { Box, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import ProductCardList from '../../components/ProductCardList'
import { gamingKeyboardProduct } from '../../placeholder'
import ProductCard from '../../components/ProductCard'
import { useWishListStore } from '../../data/stores/wishListStore'
import { ProductModel } from '../../data/productModel'
import ProductCardHover from '../../components/ProductCardHover'
import DeleteFromWishList from './components/DeleteFromWishList'

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
        <Box className='flex flex-row justify-between'>
          <Box className='flex flex-row gap-3'>
            <Button>Category</Button>
            <Button>Status</Button>
            <Button>Filters</Button>
          </Box>
          <Box className='flex flex-row gap-2 justify-center items-center'>
            <Text>Sort By</Text>
            <Button>Recently Added</Button>
          </Box>
        </Box>
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