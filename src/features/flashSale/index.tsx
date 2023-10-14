import React from 'react'
import { Box } from '@chakra-ui/react'
import FlashSaleCard from './components/FlashSaleCard'
import { ProductModel } from '../../data/productModel'
import Header from './components/Header'
import FlashSaleCardList from './components/FlashSaleCardList'
import HomePageCard from '../../components/HomePageCard'
import { gamingKeyboardProduct } from '../../placeholder'

type Props = {
  products: ProductModel[]
}

export default function FlashSales({ products }: Props) {
  // const [ toDosList, setToDosList ] = useSt
  return (
    <HomePageCard 
      title='Flash Sale'
    >
      <Box className='flex flex-col gap-2 drop-shadow justify-center max-sm:gap-6'>
        <Header /> 
        <FlashSaleCardList>
          {
            products.map((item) => (
              <FlashSaleCard product={item} />
            ))
          }
        </FlashSaleCardList>
      </Box>
    </HomePageCard>
  )
}

