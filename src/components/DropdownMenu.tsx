import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import PopoverMenu from './PopoverMenu'

type Props = {
    children: any, 
    visible: boolean 
} & BoxProps

export default function DropdownMenu({ children, visible, className }: Props) {
    return (
    <PopoverMenu visible={visible} className={className}>
        {children}
    </PopoverMenu>
    )
}