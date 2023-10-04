import { ButtonProps, IconButton } from '@chakra-ui/react'
import React from 'react'
import { JsxElement } from 'typescript'

type Props = {
    ariaLabel: string, 
    icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined
} & ButtonProps

export default function NavBarIconButton({ariaLabel, icon, onClick }: Props) {
  return (
    <IconButton
      borderRadius={'0px'}  
      variant={'ghost'} 
      aria-label={ariaLabel} 
      icon={icon}
      onClick={onClick}
    />
  )
}