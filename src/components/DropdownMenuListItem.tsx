import { Box, ListItem } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: any
}

export default function DropdownMenuListItem({ children }: Props) {
  return (
    <ListItem>
        {children} 
    </ListItem>
  )
}
