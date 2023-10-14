import { Box, List, ListItem } from '@chakra-ui/react'
import React, { Children } from 'react'

type Props = {
  children: any
}

export default function CategoriesList({ children }: Props) {
  return (
    <List className='bg-white p-2 w-[100%] min-h-0 min-w-0'>
      {children}
    </List>
  )
}
