import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any
}

export default function CompanyDetailTile({ children }: Props) {
  return (
    <Box className='flex flex-col gap-4 max-sm:gap-2 justify-center'>
        {children} 
    </Box>
  )
}