import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string, 
    // content: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined
    children: any
  }

export default function HomePageCard({ children, title }: Props) {
  return (
    <Box className='flex flex-col gap-1 max-sm:gap-6'>
        <Text className='text-lg font-bold'>{title}</Text>
        {children}
    </Box>
  )
}

