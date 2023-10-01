import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from 'react'
import NavBarIconButton from './NavBarIconButton'

type Props = {
    ariaLabel: string, 
    icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, 
    to: string
}

export default function NavBarLinkButton({ ariaLabel, icon, to }: Props) {
  return ( 
    <ChakraLink as={ReactRouterLink} to={to}> 
        <NavBarIconButton ariaLabel={ariaLabel} icon={icon}/>
    </ChakraLink>
  )
}