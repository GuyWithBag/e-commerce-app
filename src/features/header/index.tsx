import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoriesList from './components/CategoriesList'
import Banner from './components/Banner'
import CategoryListItem from './components/CategoryListItem'
import PopoverMenu from '../../components/PopoverMenu'
import { useProductTypesStore } from '../../data/stores/productTypesStore'
import { ProductTypeModel } from '../../data/productTypeModel'
import { ProductCategoryModel } from '../../data/productCategoryModel'
import { ProductSubCategoryModel } from '../../data/productSubCategoryModel'

type Props = {}

export default function Header({}: Props) {

  const productTypes = useProductTypesStore((store: any) => store.productTypes) 

  // const [ isMouseHover, setIsMouseHover ] = useState(false)
  const [ productType, setProductType ] = useState(null as ProductTypeModel | null | undefined)
  const [ category, setCategory ] = useState(null as ProductCategoryModel | null | undefined)
  // const [ subCategory, setSubCategory ] = useState({})

  function onMouseOverProductType(productType: ProductTypeModel) {
    setProductType(productType)
    // setIsMouseHover(true)
  }

  function onMouseOverCategories(category: ProductCategoryModel) {
    setCategory(category) 
  }

  function onMouseLeave() {
    setProductType(null) 
    setCategory(null)
  }

  function categoriesListView() {
    if (productType === undefined || productType === null) {
      return
    }
    else if (productType.categories === undefined) {
      return
    }
    else if (productType.categories.length === 0) {
      return 
    }
    return (
      productType.categories.map((item: ProductCategoryModel) => (
        <CategoryListItem title={item.name} onMouseOver={() => onMouseOverCategories(item)} />
      ))
    )
  }

  function subCategoriesListView() {
    if (category === undefined || category === null) {
      return
    }
    else if (category.subCategories === undefined) {
      return
    }
    else if (category.subCategories.length === 0) {
      return
    }
    return (
      category.subCategories.map((item: ProductSubCategoryModel) => (
        <CategoryListItem title={item.name}/>
      ))
    )
  }

  return (
    <Box className='drop-shadow flex flex-row bg-green-400 aspect-[20/6] max-lg:hidden'>
      <Box className='flex flex-row w-[20%]'>
        <CategoriesList>
          {
            productTypes.map((item: ProductTypeModel) => (
              <CategoryListItem title={item.name} onMouseOver={() => onMouseOverProductType(item)} /> 
            ))
          }
        </CategoriesList> 
        <PopoverMenu
          visible={productType !== null}
          onMouseLeave={onMouseLeave}
          className='bg-white h-[100%] w-52 left-[20%]'
        >
          <CategoriesList>
            {categoriesListView()}
          </CategoriesList>
          <PopoverMenu 
            className='bg-white h-[100%] w-52 left-52 bottom-0' 
            visible={category !== null}
            onMouseLeave={() => setCategory(null)}
          >
            <CategoriesList>
              {subCategoriesListView()}
            </CategoriesList>
          </PopoverMenu>
        </PopoverMenu>
      </Box>
      <Banner /> 
    </Box>
  )
}

