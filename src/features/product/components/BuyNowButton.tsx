import React from 'react'
import { ProductModel } from '../../../data/productModel'
import { Button, ButtonProps } from '@chakra-ui/react' 

type Props = ButtonProps & ProductModel

export default function BuyNowButton(props: Props) {
    return (
    <Button {...props} color={'pallete.300'}>
        Buy Now
    </Button>
    )
}
