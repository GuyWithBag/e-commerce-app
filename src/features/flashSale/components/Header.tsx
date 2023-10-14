import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import TimerSlot from './TimerSlot'

type Props = {}

export default function Header({}: Props) {
  return (
    <Box className='drop-shadow flex flex-row gap-7 max-sm:gap-2 px-10 py-3 max-sm:px-3 bg-white justify-center items-center'>
        <Text className='max-sm:text-sm'>On Sale Now</Text>
        <Box className='flex flex-row gap-2 justify-center items-center'>
          <Text className='max-sm:text-sm'>Ending in</Text> 
          <TimerSlot text='17'/>
          :
          <TimerSlot text='22'/>
          :
          <TimerSlot text='03'/>
        </Box>
        
    </Box>
  )
}