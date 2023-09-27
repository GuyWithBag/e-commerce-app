import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

type Props = {}

export default function AddToWishlistButton({}: Props) {
  return (
    <IconButton aria-label='Add to Wishlist' variant={'ghost'} icon={<AiOutlineHeart />}/>
  )
}