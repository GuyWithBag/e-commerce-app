import { Box, Image, Text } from '@chakra-ui/react'
import { ProductModel } from '../../../data/productModel'
import React from 'react'
import PriceView from '../../../components/PriceView'

export default function Card(product: ProductModel) {

  let { image, name, price, percentOff } = product

  return (
    <Box className='p-3 flex flex-col w-[170px] bg-white hover:drop-shadow-lg'>
        <Image src={image} /> 
        <Text fontSize="md">{name}</Text>
        <PriceView {...product} />
    </Box>
  )
}

