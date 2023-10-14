import { Box } from '@chakra-ui/react'
import React from 'react'
import SearchResults from '../features/searchResults'
import { ProductModel } from '../data/productModel'
import PageComponent from '../components/PageComponent'

type Props = {

}

export default function SearchPage({}: Props) {
  return (
    <PageComponent>
        <SearchResults />
    </PageComponent>
  )
}