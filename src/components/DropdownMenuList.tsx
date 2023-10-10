import { Box, BoxProps, List } from '@chakra-ui/react'
import React from 'react'
import DropdownMenu from './DropdownMenu'

type Props = {
    visible: boolean, 
    children: any
} & BoxProps

export default function DropdownMenuList({ visible, className, children }: Props) {
  return (
    <DropdownMenu visible={visible} className={className}> 
        <List>
            {children}
        </List>
    </DropdownMenu>
  )
}