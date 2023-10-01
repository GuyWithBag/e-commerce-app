import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps } from '@chakra-ui/react'

type Props = {
    onPressed?: Function, 
    children: any
} & ButtonProps 

export default function NavbarButton({ children, onPressed, variant }: Props) { 
    if (onPressed != null) {
        onPressed()
    }
    return (
        <Button variant={variant}> 
            {children}
        </Button>
    )
}

