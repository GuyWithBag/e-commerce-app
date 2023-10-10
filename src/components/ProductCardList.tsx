import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any, 
    columns: number
}

export default function ProductCardList({ children, columns }: Props) {
  return (
    <Box className={`grid grid-cols-${columns} gap-1`}
      style={{
        gridTemplateColumns: ''
      }}
    >
        {children}
    </Box>
  )
}

