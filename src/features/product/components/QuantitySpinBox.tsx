import { Box, IconButton, Input } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
  onIncrement: MouseEventHandler, 
  onDecrement: MouseEventHandler, 
  value: number
}

export default function QuantitySpinBox({ onIncrement, onDecrement, value }: Props) {
  return (
    <Box className='flex flex-row'>
        <IconButton 
          borderRadius={'0px'} 
          aria-label='Decrement' 
          icon={<AiOutlineMinus />}
          onClick={onDecrement}
        />
        <Input 
          borderRadius={'0px'} 
          value={value} 
          w={'40px'}
          p={'13px'}
          fontSize={'12px'}
        />
        <IconButton 
          borderRadius={'0px'} 
          aria-label='Increment' 
          icon={<AiOutlinePlus />}
          onClick={onIncrement}
        />
    </Box>
  )
}
