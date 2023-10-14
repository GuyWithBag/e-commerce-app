import { Button, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any
}

export default function HeaderButton({ children }: Props) {
  return (
    <Button px={'6px'}><Text className='max-sm:text-xs font-normal'>{children}</Text></Button> 
  )
}