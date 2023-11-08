import { Button, ButtonProps, ListItem, ListItemProps, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
} & ButtonProps

export default function CategoryListItem({ title, onMouseOver, onClick }: Props) {
  return (
    <ListItem className='my-[0px]'> 
      <Button h={'1.2rem'} variant={'ghost'} onMouseOver={onMouseOver} onClick={onClick}>
        <Text className=' text-xs font-normal color-darkmode'>{title}</Text>
      </Button>
    </ListItem>
  )
}


