import { Box } from '@chakra-ui/react'
import React from 'react'
import CategoryCard from './components/CategoryCard'
import Clothing from '../../assets/images/placeholder/clothing.png'
import HomePageCategoryCard from '../../components/HomePageCard'

type Props = {}

export default function CategoriesGrid({}: Props) {
  return (
    <HomePageCategoryCard title='Categories'>
      <Box className='grid grid-cols-8 grid-rows-2 h-92 w-[100%] gap-1 max-sm:grid-cols-4 max-sm:grid-rows-3'>
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
        <CategoryCard image={Clothing} name='ASS' /> 
      </Box>
    </HomePageCategoryCard>
  )
}