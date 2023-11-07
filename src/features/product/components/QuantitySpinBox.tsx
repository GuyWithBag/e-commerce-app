import { Box, IconButton, Input } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
  onIncrement: MouseEventHandler, 
  onDecrement: MouseEventHandler, 
  value: number, 
  variant: string
}

export default function QuantitySpinBox({ onIncrement, onDecrement, value, variant }: Props) {
  switch (variant) {
    case 'small': 
      return (
        <Box className='flex flex-row items-center h-[28px]'>
          <IconButton 
            borderRadius={'1.5rem 0px 0px 1.5rem'}
            aria-label='Decrement' 
            icon={<AiOutlineMinus />}
            onClick={onDecrement}
            h={'28px'}
          />
          <Input 
            borderRadius={'0px'} 
            value={value} 
            w={'40px'}
            p={'13px'}
            h={'28px'}
            fontSize={'12px'}
          />
          <IconButton 
            borderRadius={'0px 1.5rem 1.5rem 0px'}
            h={'28px'}
            aria-label='Increment' 
            icon={<AiOutlinePlus />}
            onClick={onIncrement}
          />
        </Box>
      )
  }
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
