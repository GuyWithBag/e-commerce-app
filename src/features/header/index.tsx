import { Box } from '@chakra-ui/react'
import React from 'react'
import CategoriesList from './components/CategoriesList'
import Banner from './components/Banner'
import CategoryListItem from './components/CategoryListItem'

type Props = {}

export default function Header({}: Props) {

  let categories: string[] = [
    'Electronic Devices',
    'Electronic Accessories', 
    'TV & Home Appliances', 
    'Health & Beauty', 
    'Babies & Toys', 
    'Groceries & Pets', 
    'Home & Living', 
    `Women's Fashion & Accessories`, 
    `Men's Fashion & Accessories`, 
    `Kid's Fashion & Accessories`, 
    'Sports & Lifestyle', 
    'Automotive & Motorcycles', 
  ]

  return (
    <Box className='drop-shadow flex flex-row h-80 bg-red-400'>
        <CategoriesList>
          {
            categories.map((item, index) => (
              <CategoryListItem title={item}/>
            ))
          }

        </CategoriesList> 
        <Banner /> 
    </Box>
  )
}

