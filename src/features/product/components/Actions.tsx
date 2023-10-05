import { Box } from '@chakra-ui/react'
import React from 'react'
import Ratings from './Ratings'
import AddToWishlistButton from '../../../components/AddToWishListButton'
import ShareButton from '../../../components/ShareButton'
import { ProductModel } from '../../../data/productModel'

type Props = {
  product: ProductModel
}

export default function Actions({ product }: Props) {
  return (
    <Box className='flex flex-row justify-between'>
        <Ratings product={product} /> 
        <Box className='flex flex-row items-center'>
            <AddToWishlistButton product={product} />  
            <ShareButton /> 
        </Box>
    </Box>
  )
}