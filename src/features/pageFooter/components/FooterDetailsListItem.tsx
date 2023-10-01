import { Box, ListItem } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
    href?: string
}

export default function FooterDetailsListItem({ title, href }: Props) {
  return (
    <ListItem className=' my-2'>
        <a href={href} className='text-xs'>{title}</a>
    </ListItem>
  )
}
