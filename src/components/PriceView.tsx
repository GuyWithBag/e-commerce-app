import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductModel } from '../data/productModel'


export default function PriceView({
    price, 
    percentOff, 
}: ProductModel) {

    let newPrice: number = price - (price * percentOff)

    return (
        <Box>
            <Text fontSize="xl" className='text-orange-400 text-left'>
                ${newPrice}
            </Text>
            <Text fontSize="sm" className='text-left'>
                <span className='line-through'>${price}</span>
                <span> -{percentOff * 100}%</span>
            </Text>  
        </Box>
    )
}