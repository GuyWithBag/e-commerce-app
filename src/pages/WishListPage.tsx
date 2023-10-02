import { Box } from '@chakra-ui/react'
import React from 'react'
import WishList from '../features/wish List'

type Props = {}

export default function WishListPage({}: Props) {
  return (
    <Box pt="pagePaddingTop" px="navbarPaddingX" >
      <WishList />
    </Box>
  )
}