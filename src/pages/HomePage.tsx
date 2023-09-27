import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../features/header'
import FlashSales from '../features/flashSale'
import HomePageCard from '../components/HomePageCard'
import Footer from '../features/pageFooter'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <Box pt="pagePaddingTop" px="navbarPaddingX" className='flex flex-col gap-2'>
        <Header />
        <Box>
          <FlashSales />
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

