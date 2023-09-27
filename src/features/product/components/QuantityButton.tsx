import { Box, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {}

export default function QuantityButton({}: Props) {
  return (
    <Box className='flex flex-row'>
        <IconButton aria-label='Decrement' icon={<AiOutlineMinus />}/>
        <Input value={1} w={'40px'}/>
        <IconButton aria-label='Increment' icon={<AiOutlinePlus />}/>
    </Box>
  )
}
