import React from 'react'
import { Box, Radio, Text } from '@chakra-ui/react'
import ShoppingCartItemGroup from './ShoppingCartItemGroup'
import ShoppingCartItem from './ShoppingCartItem'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'

type Props = {
    itemsByShops: Map<string, ShoppingCartItemModel>
}

export default function AllShoppingCartItems({ itemsByShops }: Props) {
    return (
        <Box className='flex flex-col gap-2'>
            <Box className='bg-white p-4'>
                <Box className='flex flex-row justify-between'>
                    <span  className='flex flex-row gap-2' >
                        <Radio />
                        <Text>All items (2)</Text> 

                    </span>
                </Box>
            </Box>
            <Box className='flex flex-col gap-1'>
                {/* Shopping cart items here */}
                <ShoppingCartItemGroup group={'Shein'}>
                    {
                        Array.from(itemsByShops.keys()).map((key: string, index: number) => (
                                <ShoppingCartItem cartItem={itemsByShops.get(key)} />
                        ))
                    }
                </ShoppingCartItemGroup>
            </Box>
        </Box>
    )
}