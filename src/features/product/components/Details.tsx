import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Details({ name, description }: ProductModel) {
  return (
    <Box className='flex flex-col'>
        <Heading fontSize={'27px'}>{name}</Heading>
        <Box className='flex flex-row'>
            
        </Box>
        <Text>{description}</Text>
    </Box>
  )
}

