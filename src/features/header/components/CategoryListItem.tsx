import { Button, ButtonProps, ListItem, ListItemProps, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
} & ButtonProps

export default function CategoryListItem({ title, onMouseOver, onClick }: Props) {
  return (
    <ListItem> 
      <Button variant={'ghost'} onMouseOver={onMouseOver} onClick={onClick}>
        <Text className='text-sm'>{title}</Text>
      </Button>
    </ListItem>
  )
}