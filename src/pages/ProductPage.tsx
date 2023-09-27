import { Box } from '@chakra-ui/react'
import React from 'react'
import Product from '../features/product'
import { testProd } from '../placeholder'

type Props = {}

export default function ProductPage({}: Props) {
  return (
    <Box pt="pagePaddingTop" px="navbarPaddingX">
      <Product {...testProd}/> 
    </Box>
  )
}