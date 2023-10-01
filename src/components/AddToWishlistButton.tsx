import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type Props = {
  toggled: boolean 
}

export default function AddToWishlistButton({ toggled }: Props) {
  if (toggled == true) {
    return (
      <IconButton 
        aria-label='Add to Wishlist' 
        variant={'ghost'} 
        icon={
          <AiFillHeart color='red' />
        }
      />
    )
  }
  return (
    <IconButton aria-label='Add to Wishlist' variant={'ghost'} icon={<AiOutlineHeart />}/>
  )
}

