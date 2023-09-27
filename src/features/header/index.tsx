import { Box } from '@chakra-ui/react'
import React from 'react'
import CategoriesList from './components/CategoriesList'
import Banner from './components/Banner'
import CategoryListItem from './components/CategoryListItem'

type Props = {}

export default function Header({}: Props) {
  return (
    <Box className='drop-shadow flex flex-row h-80 bg-red-400'>
        <CategoriesList>
          <CategoryListItem title=''/>
        </CategoriesList> 
        <Banner /> 
    </Box>
  )
}

