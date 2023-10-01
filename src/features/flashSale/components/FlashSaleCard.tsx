import { Box, Image, Text, Card, CardBody, Button } from '@chakra-ui/react'
import { ProductModel } from '../../../data/productModel'
import React from 'react'
import PriceView from '../../../components/PriceView'

export default function FlashSaleCard(product: ProductModel) {

  let { thumbnail, name, price, percentOff } = product

  return (
    <button>
      <Card variant={'unstyled'} w={'productCardW'} className='p-3 bg-white hover:drop-shadow-lg'>
          <CardBody>
            <Image src={thumbnail} /> 
            <Box className='h-2' />
            <Text fontSize="md" className='text-left text-sm'>{name}</Text>
            <PriceView {...product} />
          </CardBody>
      </Card>
    </button>
  )
}
