import { Box } from '@chakra-ui/react'
import React from 'react'
import CategoryCard from './components/CategoryCard'
import HomePageCategoryCard from '../../components/HomePageCard'
import { useProductTypesStore } from '../../data/stores/productTypesStore'
import { ProductTypeModel } from '../../data/productTypeModel'

type Props = {}

export default function CategoriesGrid({}: Props) {
  const productTypes = useProductTypesStore((store: any) => store.productTypes) 

  return (
    <HomePageCategoryCard title='Categories'>
      <Box className='
        grid grid-cols-8 grid-rows-2 h-92 w-[100%] gap-1 
        max-lg:grid-cols-[repeat(auto-fit,135px)]
        max-sm:grid-cols-[repeat(auto-fit,70px)]
      '>
        {
          productTypes.map((item: ProductTypeModel) => (
            <CategoryCard productType={item}/>
          ))
        }
      </Box>
    </HomePageCategoryCard>
  )
}