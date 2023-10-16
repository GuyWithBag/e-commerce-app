import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function OrderSummary({}: Props) {
    return (
        <Box className='flex flex-col gap-3'>
            <Box className='flex flex-col bg-white drop-shadow p-4'>
                <Box>
                    <Text>Order Summary</Text>
                </Box>
                <Box className='flex flex-col gap-2'>
                    <Text>$100</Text>
                    <Text>Already Saved</Text>
                    <Text>Reward 12 ShopIt points</Text>
                    <Button>Checkout Now (2)</Button>
                </Box>
            </Box>
            <Box className='flex flex-col bg-white drop-shadow p-4'>
                <Box>We Accept</Box>
                <Box className='grid grid-cols-6'>
                    {/* Credit cards here */}
                </Box>
            </Box>
        </Box>
    )
}