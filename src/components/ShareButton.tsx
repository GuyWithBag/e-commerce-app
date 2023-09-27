import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'

type Props = {}

export default function ShareButton({}: Props) {
  return (
    <IconButton 
        aria-label='Share Button'
        variant={'ghost'}
        icon={<AiOutlineShareAlt />}
    />
  )
}