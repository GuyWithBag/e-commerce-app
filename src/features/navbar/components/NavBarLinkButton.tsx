import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps, ButtonProps, Button, Text } from '@chakra-ui/react'
import React from 'react'
import NavbarButton from './NavBarButton'

type Props = {
    children: any, 
    to: string, 
} & ButtonProps 

export default function NavBarLinkButton({ children, to, variant, className, onClick }: Props) {
  return (
    <ChakraLink as={ReactRouterLink} to={to} >
        <Button color={'white'} variant={variant} className={className} onClick={onClick}> 
            {children}
        </Button>
    </ChakraLink>
  )
}

