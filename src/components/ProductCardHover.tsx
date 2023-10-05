import { Box } from '@chakra-ui/react'
import React from 'react'
import AddToCartButton from '../features/product/components/AddToCartButton'
import { ProductModel } from '../data/productModel'

type Props = {
    product: ProductModel, 
    children: any
}

export default function ProductCardHover({ product, children }: Props) {
  return (
    <Box className='flex flex-col justify-start items-start origin-center gap-2 bg-red-400 translate-x-[-50%]'>
        {children}
        <AddToCartButton product={product} quantity={1}/>
    </Box>
  )
}