import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any, 
    columns: number
}

export default function ProductCardList({ children, columns }: Props) {
  return (
    <Box className={`
      grid grid-cols-${columns} gap-1 
      max-lg2:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2
    `}
    >
        {children}
    </Box>
  )
}

