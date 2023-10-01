import { Button, Text } from '@chakra-ui/react'
import { AiOutlineShop } from 'react-icons/ai' 

import React from 'react'

type Props = {}

export default function ViewShopButton({}: Props) {
  return (
    <Button variant={'outline'} p={'5px'} className='flex flex-row gap-1'>
        <AiOutlineShop />
        <Text className='text-sm font-normal'>View Shop</Text>
    </Button>
  )
}