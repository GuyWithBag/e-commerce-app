import { Box } from '@chakra-ui/react'
import React from 'react'
import SearchResults from '../features/searchResults'
import { ProductModel } from '../data/productModel'

type Props = {

}

export default function SearchPage({}: Props) {
  return (
    <Box pt="pagePaddingTop" px="navbarPaddingX">
        <SearchResults />
    </Box>
  )
}