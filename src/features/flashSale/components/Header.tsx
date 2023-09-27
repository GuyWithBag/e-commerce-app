import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <Box className='drop-shadow flex flex-row gap-7 px-10 py-3 bg-white'>
        <Text>On Sale Now</Text>
        <Text>Ending in 1 2 3</Text>
    </Box>
  )
}