import { Box, ListItem } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'

type Props = {
    title: string
    href?: string
    icon: ReactJSXElement
}

export default function FooterDetailsIconListItem({ title, href, icon }: Props) {
  return (
    <ListItem className=' my-2'>
      <Box className='flex flex-row items-center gap-1'>
        {icon} 
        <a href={href} className='text-xs'>{title}</a>
      </Box>
    </ListItem>
  )
}
