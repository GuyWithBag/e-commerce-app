import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps, ButtonProps, Button } from '@chakra-ui/react'
import React from 'react'
import NavbarButton from './NavbarButton'

type Props = {
    children: any, 
    to: string, 
} & ButtonProps 

export default function NavBarLinkButton({ children, to, variant, className }: Props) {
  return (
    <ChakraLink as={ReactRouterLink} to={to} >
        <Button variant={variant} className={className}> 
            {children}
        </Button>
    </ChakraLink>
  )
}

