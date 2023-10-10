import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any, 
    visible: boolean
} & BoxProps

export default function PopoverMenu({ children, visible, className, onMouseLeave, onMouseOver }: Props) {
  return (
    <Box 
        zIndex={'9'} 
        className={`absolute ${visible ? 'block' : 'hidden'} transition-opacity ${className} drop-shadow-lg bg-white text-black`}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </Box>
  )
}
