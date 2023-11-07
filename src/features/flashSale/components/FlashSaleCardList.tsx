import { Box } from '@chakra-ui/react'
import React from 'react'
import '../../../index'

type Props = {
    children: any
}

export default function FlashSaleCardList({ children }: Props) {
  return (
    <Box className={`
      grid gap-2 max-sm:gap-y-1  drop-shadow 
      body-secondary max-sm:bg-transparent
      grid-cols-6 max-lg2:grid-cols-5 
      max-lg:grid-cols-4 max-md:grid-cols-3
      items-center justify-center 
    `}>
        {children}
    </Box>
  )
}

