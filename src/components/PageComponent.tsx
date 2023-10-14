import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any
}

export default function PageComponent({ children }: Props) {
  return (
    <Box  pt="pagePaddingTop" px={'pagePaddingX'} className='flex flex-col justify-center items-center gap-2'>
        <Box maxW={'pageMaxWidth'} className='flex flex-col justify-center items-center gap-2'>
            {children} 
        </Box>
    </Box>
  )
}