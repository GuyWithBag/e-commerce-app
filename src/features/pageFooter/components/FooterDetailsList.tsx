import { Box, List, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string, 
    children: any
}

export default function FooterDetailsList({ title, children }: Props) {
  return (
    <Box className='flex flex-col gap-2'>
        <Text className='text-xs font-bold'>{title}</Text> 
        {children}
    </Box>
  )
}

