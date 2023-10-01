import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any
}

export default function ProductCardList({ children }: Props) {
  return (
    <Box className='grid grid-cols-6 gap-2'>
        {children}
    </Box>
  )
}

