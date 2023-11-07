import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Button, ButtonProps } from '@chakra-ui/react' 

type Props = {
    product: ProductModel
} & ButtonProps

export default function BuyNowButton(props: Props) {
    return (
    <Button {...props} borderRadius={0} color={'pallete.300'} >
        Buy Now
    </Button>
    )
}
