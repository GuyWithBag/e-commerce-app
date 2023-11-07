import { Button, Text } from '@chakra-ui/react'
import { AiOutlineShop } from 'react-icons/ai' 

import React from 'react'

type Props = {}

export default function ViewShopButton({}: Props) {
  return (
    <Button variant={'outline'} p={'5px'} className='flex flex-row gap-1'>
        <AiOutlineShop className='color-darkmode' />
        <Text className='text-sm font-normal color-darkmode'>View Shop</Text>
    </Button>
  )
}