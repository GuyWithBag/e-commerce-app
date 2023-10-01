import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductModel } from '../data/productModel'
import PriceView from './PriceView'
import StarRatings from './StarRatings'

type Props = {
    
}

export default function ProductCard(product: ProductModel) {
  
  let { thumbnail, name, price, } = product

  return (
    <button>
      <Card borderRadius={'0px'} h={'productCardH'}  w={'productCardW'} className='bg-white drop-shadow justify-start'>
          <CardBody p={'0px'} className='flex flex-col items-center justify-start hover:drop-shadow-xl'>
              <Image src={thumbnail} />
              <Box className='p-2 flex flex-col items-start justify-start w-[100%]'>
                <Text className='text-sm'>{name}</Text>
                <PriceView {...product} />
                <StarRatings rating={3} />
              </Box>
          </CardBody>
      </Card>
    </button>
  )
}