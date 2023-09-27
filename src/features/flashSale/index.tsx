import React from 'react'
import { Box } from '@chakra-ui/react'
import Card from './components/Card'
import { ProductModel } from '../../data/productModel'
import Header from './components/Header'
import CardList from './components/CardList'
import HomePageCard from '../../components/HomePageCard'
import { testProd } from '../../placeholder'

type Props = {}

export default function FlashSales({}: Props) {
  // const [ toDosList, setToDosList ] = useSt
  return (
    <HomePageCard 
      title='Flash Sale'
      content={    
        <Box className='flex flex-col gap-2 drop-shadow'>
          <Header /> 
          <CardList>
            <Card {...testProd} />
            <Card {...testProd} />
            <Card {...testProd} />
            <Card {...testProd} />
            <Card {...testProd} />
            <Card {...testProd} />
          </CardList>
        </Box>
      }
    />
  )
}

