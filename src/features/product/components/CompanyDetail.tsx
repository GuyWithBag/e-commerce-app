import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    property: string, 
    value: string
}

export default function CompanyDetail({ property, value }: Props) {
  return (
    <Box className='flex flex-row justify-between px-7'>
        <Text className='text-xs'>{property}</Text>
        <Text color={'pallete.200'} className='text-xs'>{value}</Text>
    </Box>
  )
}