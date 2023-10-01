import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import TimerSlot from './TimerSlot'

type Props = {}

export default function Header({}: Props) {
  return (
    <Box className='drop-shadow flex flex-row gap-7 px-10 py-3 bg-white'>
        <Text>On Sale Now</Text>
        <Box className='flex flex-row gap-2'>
          <Text>Ending in</Text> 
          <TimerSlot text='17'/>
          :
          <TimerSlot text='22'/>
          :
          <TimerSlot text='03'/>
        </Box>
        
    </Box>
  )
}