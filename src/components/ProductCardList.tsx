import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
    children: any, 
    columns: number, 
    ifEmpty?: ReactNode
}

export default function ProductCardList({ children, columns, ifEmpty }: Props) {
  if (children.length == 0 && ifEmpty != undefined) {
    return (
      <Box className='flex justify-center items-center'>
        {ifEmpty}
      </Box>
    )
  }
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

