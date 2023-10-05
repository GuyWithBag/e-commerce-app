import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import StarRatings from '../../../components/StarRatings'
import { ProductModel } from '../../../data/productModel'

type Props = {
  product: ProductModel
}

export default function Ratings({ product }: Props) {

  const { rating } = product

  return (
    <Box className='flex flex-row items-center gap-1'>
        <StarRatings rating={rating} />
        <Text>1000 ratings</Text>
        <Text>| 12k sold</Text>
    </Box>
  )
}

