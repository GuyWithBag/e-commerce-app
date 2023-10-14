import React from 'react'
import DropdownMenuListItem from './DropdownMenuListItem'
import { Button, Text } from '@chakra-ui/react'

type Props = {
    children: any
}

export default function DropdownMenuListItemButton({ children }: Props) {
    return (
        <DropdownMenuListItem>
            <Button variant={'ghost'}>
                <Text className='text-xs font-normal'>
                    {children}
                </Text>
            </Button>
        </DropdownMenuListItem>
    )
}