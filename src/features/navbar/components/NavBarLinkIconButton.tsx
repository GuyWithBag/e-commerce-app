import { Link as ReactRouterLink } from 'react-router-dom'
import { ButtonProps, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from 'react'
import NavBarIconButton from './NavBarIconButton'

type Props = {
    ariaLabel: string, 
    icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, 
    to: string
} & ButtonProps

export default function NavBarLinkButton({ ariaLabel, icon, to, onClick, onMouseOver, onMouseLeave }: Props) {
  return ( 
    <ChakraLink as={ReactRouterLink} to={to}> 
        <NavBarIconButton ariaLabel={ariaLabel} icon={icon} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
    </ChakraLink>
  )
}

