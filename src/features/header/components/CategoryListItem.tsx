import { Button, ButtonProps, ListItem, ListItemProps, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
} & ButtonProps

export default function CategoryListItem({ title, onMouseOver, onClick }: Props) {
  return (
    <ListItem className='h-[3vw]'> 
      <Button variant={'ghost'} onMouseOver={onMouseOver} onClick={onClick}>
        <Text className='text-sm font-normal color-darkmode'>{title}</Text>
      </Button>
    </ListItem>
  )
}