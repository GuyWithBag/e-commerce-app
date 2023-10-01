import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ShoppingCart from '../features/shoppingCart'

type Props = {}

export default function ShoppingCartpage({}: Props) {
  return (
    <Box pt="pagePaddingTop" px="navbarPaddingX" >
      <ShoppingCart /> 
    </Box>
  )
}