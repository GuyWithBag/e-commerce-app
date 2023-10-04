import { Box } from '@chakra-ui/react'
import React from 'react'
import AddToCartButton from '../features/product/components/AddToCartButton'
import { ProductModel } from '../data/productModel'

type Props = {
    product: ProductModel
}

export default function ProductCardHover({ product }: Props) {
  return (
    <Box className='flex justify-center items-center h-[100%]'>
        <AddToCartButton product={product} quantity={1}/>
    </Box>
  )
}