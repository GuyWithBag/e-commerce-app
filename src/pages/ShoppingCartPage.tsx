import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ShoppingCart from '../features/shoppingCart'
import PageComponent from '../components/PageComponent'

type Props = {}

export default function ShoppingCartPage({}: Props) {
  return (
    <PageComponent>
      <ShoppingCart /> 
    </PageComponent>
  )
}