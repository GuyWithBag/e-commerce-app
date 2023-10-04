import React from 'react'
import { Box } from '@chakra-ui/react'
import FlashSaleCard from './components/FlashSaleCard'
import { ProductModel } from '../../data/productModel'
import Header from './components/Header'
import FlashSaleCardList from './components/FlashSaleCardList'
import HomePageCard from '../../components/HomePageCard'
import { gamingKeyboardProduct } from '../../placeholder'

type Props = {}

export default function FlashSales({}: Props) {
  // const [ toDosList, setToDosList ] = useSt
  return (
    <HomePageCard 
      title='Flash Sale'
    >
      <Box className='flex flex-col gap-2 drop-shadow'>
        <Header /> 
        <FlashSaleCardList>
          <FlashSaleCard {...gamingKeyboardProduct} />
          <FlashSaleCard {...gamingKeyboardProduct} />
          <FlashSaleCard {...gamingKeyboardProduct} />
          <FlashSaleCard {...gamingKeyboardProduct} />
          <FlashSaleCard {...gamingKeyboardProduct} />
          <FlashSaleCard {...gamingKeyboardProduct} />
        </FlashSaleCardList>
      </Box>
    </HomePageCard>
  )
}

