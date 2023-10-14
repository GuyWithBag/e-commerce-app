import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../features/header'
import FlashSales from '../features/flashSale'
import HomePageCard from '../components/HomePageCard'
import Footer from '../features/pageFooter'
import CategoriesGrid from '../features/categoriesGrid'
import JustForYou from '../features/justForYou'
import { products } from '../placeholder'
import PageComponent from '../components/PageComponent'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <PageComponent>
      <Header />
      <Box className='flex flex-col gap-4'>
        <FlashSales products={products} />
        <CategoriesGrid /> 
        <JustForYou products={products} /> 
      </Box>
    </PageComponent>
  )
}

