import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps } from '@chakra-ui/react'

type Props = {
    onPressed?: Function, 
    children: any
} & ButtonProps 

export default function NavBarButton({ className, children, onClick, variant }: Props) { 
    return (
        <Button color={'white'} variant={variant} className={className} onClick={onClick} > 
            {children}
        </Button>
    )
}

