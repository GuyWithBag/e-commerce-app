import { Button, IconButton, useToast } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'

type Props = {}

export default function ShareButton({}: Props) {
  const toast = useToast()

  function onClick() {
    const currentURL: string = document.location.href
    navigator.clipboard.writeText(currentURL) 
    toast({
      title: 'Copied link to product.', 
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }
  return (
    <IconButton 
        aria-label='Share Button'
        variant={'ghost'}
        icon={<AiOutlineShareAlt />}
        onClick={onClick}
    />
  )
}