import React from 'react'
import { Box } from '@chakra-ui/react'
import FlashSaleCard from './components/FlashSaleCard'
import { ProductModel } from '../../data/productModel'
import Header from './components/Header'
import FlashSaleCardList from './components/FlashSaleCardList'
import HomePageCard from '../../components/HomePageCard'
import { testProd } from '../../placeholder'

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
          <FlashSaleCard {...testProd} />
          <FlashSaleCard {...testProd} />
          <FlashSaleCard {...testProd} />
          <FlashSaleCard {...testProd} />
          <FlashSaleCard {...testProd} />
          <FlashSaleCard {...testProd} />
        </FlashSaleCardList>
      </Box>
    </HomePageCard>
  )
}

