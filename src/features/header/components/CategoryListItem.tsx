import { ListItem, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
}

export default function CategoryListItem({ title }: Props) {
  return (
    <ListItem>
        <Text className='text-sm'>{title}</Text>
    </ListItem>
  )
}