import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
    text: string
}

export default function TimerSlot({ text }: Props) {
  return (
    <Box className='flex justify-center bg-orange-500 w-7 text-white'>
        {text}
    </Box>
  )
}