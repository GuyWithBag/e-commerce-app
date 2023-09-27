import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Box, Image } from '@chakra-ui/react'


export default function ProductCarousel({ image }: ProductModel) {
  return (
    <Box>
        <Image src={image} />
    </Box>
  )
}
