import { Box, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineRight, AiOutlineShop } from 'react-icons/ai'

type Props = {
    group: string
    children: any
}

export default function ShoppingCartItemGroup({ group, children }: Props) {
  return (
    <Box className='flex flex-col p-4 bg-white gap-4'>
        <Box className='flex flex-row gap-4 items-center'>
            <Radio />
            <AiOutlineShop />
            <Text className='font-bol text-lg'>{group}</Text>
            <AiOutlineRight /> 
        </Box>
        <Box className='flex flex-col gap-2'>
            {children}
        </Box>
    </Box>
  )
}

