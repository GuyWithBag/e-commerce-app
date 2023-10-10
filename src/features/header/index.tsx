import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoriesList from './components/CategoriesList'
import Banner from './components/Banner'
import CategoryListItem from './components/CategoryListItem'
import PopoverMenu from '../../components/PopoverMenu'
import { useProductTypesStore } from '../../data/stores/productTypesStore'
import { ProductTypeModel } from '../../data/productTypeModel'
import { ProductCategoryModel } from '../../data/productCategoryModel'

type Props = {}

export default function Header({}: Props) {

  const productTypes = useProductTypesStore((store: any) => store.productTypes) 

  const [ isMouseHover, setIsMouseHover ] = useState(false)
  const [ productType, setProductType ] = useState({} as ProductTypeModel)
  const [ category, setCategory ] = useState({})
  const [ subCategory, setSubCategory ] = useState({})

  function onMouseOver(productType: ProductTypeModel) {
    setCategory(productType)
    setIsMouseHover(true)
  }

  function onMouseLeave() {
    setIsMouseHover(false)
  }

  return (
    <Box className='drop-shadow flex flex-row h-80 bg-red-400'>
      <Box className='flex flex-row w-[20%]'>
        <CategoriesList>
          {
            productTypes.map((item: ProductTypeModel) => (
              <CategoryListItem title={item.name} onMouseOver={() => onMouseOver(item)} /> 
            ))
          }
        </CategoriesList> 
        <PopoverMenu 
          visible={isMouseHover} 
          onMouseLeave={onMouseLeave}
          className='bg-white h-[100%] w-52 left-[20%]'
        >
          <CategoriesList>
            {
              productType.category.map((item: ProductCategoryModel) => (
                <CategoryListItem title={item.name}/>
              ))
            }
          </CategoriesList>
        </PopoverMenu>
      </Box>
      <Banner /> 
    </Box>
  )
}

