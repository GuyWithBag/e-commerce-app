import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { ProductModel } from '../data/productModel'
import { useWishListStore } from '../data/stores/wishListStore'

type Props = {
  product: ProductModel
}

export default function AddToWishListButton({ product }: Props) {

  const wishList: ProductModel[] = useWishListStore((task: any) => task.wishList)
  const addToWishList = useWishListStore((task: any) => task.addToWishList)
  const deleteFromWishList = useWishListStore((task: any) => task.deleteFromWishList)

  function addWish() {
    addToWishList(product)
  }

  function removeWish() {
    deleteFromWishList(product)
  }

  if (wishList.includes(product)) {
    return (
      <IconButton 
        aria-label='Add to Wishlist' 
        variant={'ghost'} 
        icon={
          <AiFillHeart color='red' />
        } 
        onClick={removeWish}
      />
    )
  }
  return (
    <IconButton 
      aria-label='Add to Wishlist' 
      variant={'ghost'} 
      icon={<AiOutlineHeart />}
      onClick={addWish}
    />
  )
}
