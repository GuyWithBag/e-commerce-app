import { Box } from '@chakra-ui/react'
import React from 'react'
import Product from '../features/product'
import PageComponent from '../components/PageComponent'

type Props = {}

export default function ProductPage({}: Props) {
  return (
    <PageComponent>
      <Product /> 
    </PageComponent>
  )
}