import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Button, ButtonProps } from '@chakra-ui/react'

type Props = ButtonProps & ProductModel

export default function AddToCartButton(props: Props) {
  return (
    <Button {...props} color={'pallete.200'}>
        Add To Cart
    </Button>
  )
}