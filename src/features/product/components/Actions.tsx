import { Box } from '@chakra-ui/react'
import React from 'react'
import Ratings from './Ratings'
import AddToWishlistButton from '../../../components/AddToWish ListButton'
import ShareButton from '../../../components/ShareButton'
import { ProductModel } from '../../../data/productModel'

type Props = {
  product: ProductModel
}

export default function Actions({ product }: Props) {
  return (
    <Box className='flex flex-row justify-between'>
        <Ratings product={product} /> 
        <Box className='flex flex-row items-center max-sm:items-end'>
            <AddToWishlistButton product={product} />  
            <ShareButton /> 
        </Box>
    </Box>
  )
}

