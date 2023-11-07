import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { ShoppingCartItemModel } from '../../../data/shoppingCartItemModel'

type Props = {
    cart: ShoppingCartItemModel[]
}

export default function OrderSummary({ cart }: Props) {
    return (
        <Box className='flex flex-col gap-3'>
            <Box className='flex flex-col body-secondary drop-shadow p-4'>
                <Box>
                    <Text className='font-bold text-xl'>Order Summary</Text>
                </Box>
                <Box className='flex flex-col gap-2'>
                    <Text className='font-bold text-2xl text-right'>$100</Text>
                    <Text className='text-right'>Already Saved</Text>
                    <Text className='text-right'>Reward 12 ShopIt points</Text>
                    <Button bgColor={'pallete.200'} color={'white'} >Checkout Now ({cart.length})</Button>
                </Box>
            </Box>
            <Box className='flex flex-col body-secondary drop-shadow p-4'>
                <Box>We Accept</Box>
                <Box className='grid grid-cols-6'>
                    {/* Credit cards here */}
                </Box>
            </Box>
        </Box>
    )
}