import React from 'react'
import DropdownMenuListItem from './DropdownMenuListItem'
import { Button } from '@chakra-ui/react'

type Props = {
    children: any
}

export default function DropdownMenuListItemButton({ children }: Props) {
    return (
        <DropdownMenuListItem>
            <Button variant={'unstyled'}>
                {children}
            </Button>
        </DropdownMenuListItem>
    )
}