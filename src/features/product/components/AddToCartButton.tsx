import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Button, ButtonProps, useToast } from '@chakra-ui/react'
import { useCartStore } from '../../../data/stores/cartStore'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'
import { v4 } from 'uuid'

type Props = {
  product: ProductModel, 
  quantity: number
} & ButtonProps

export default function AddToCartButton(props: Props) {
  const toast = useToast()
  const addToCart = useCartStore(store => store.addToCart)
  const { product, quantity } = props

  function onClick() {
    addToCart(product, quantity) 
    toast({
      title: 'Added to cart.',
      description: "Check your item in your shopping cart.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Button {...props} color={'pallete.200'} onClick={onClick}>
        Add To Cart
    </Button>
  )
}