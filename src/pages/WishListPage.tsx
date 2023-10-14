import { Box } from '@chakra-ui/react'
import React from 'react'
import WishList from '../features/wishList'
import PageComponent from '../components/PageComponent'

type Props = {}

export default function WishListPage({}: Props) {
  return (
    <PageComponent>
      <WishList />
    </PageComponent>
  )
}