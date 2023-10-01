import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../features/header'
import FlashSales from '../features/flashSale'
import HomePageCard from '../components/HomePageCard'
import Footer from '../features/pageFooter'
import CategoriesGrid from '../features/categoriesGrid'
import JustForYou from '../features/justForYou'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <Box className='flex flex-col'>
      <Box pt="pagePaddingTop" px="navbarPaddingX" className='flex flex-col gap-2'>
        <Header />
        <Box className='flex flex-col gap-4'>
          <FlashSales />
          <CategoriesGrid /> 
          <JustForYou /> 
        </Box>
      </Box>
    </Box>
  )
}

