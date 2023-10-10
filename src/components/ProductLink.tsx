import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react' 
import { ProductModel } from '../data/productModel'

type Props = {
    product: ProductModel
    children: any
}

export default function ProductLink({ product, children }: Props) {

    let { id } = product

  return (
    <ChakraLink as={ReactRouterLink} to={`/products/${id}`} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
        {children}
    </ChakraLink>
  )
}

