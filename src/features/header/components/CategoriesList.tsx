import { Box, List, ListItem } from '@chakra-ui/react'
import React, { Children } from 'react'

type Props = {
  children: any
}

export default function CategoriesList({ children }: Props) {
  return (
    <List className='body-secondary p-2 w-[100%] min-h-0 min-w-0 overflow-y-auto'>
      {children}
    </List>
  )
}
