import { Box, Image, Text, Card, CardBody, Button } from '@chakra-ui/react'
import { ProductModel } from '../../../data/productModel'
import React, { useState } from 'react'
import ProductLink from '../../../components/ProductLink' 
import ProductCard from '../../../components/ProductCard'
import PriceView from './PriceView'

type Props = {
  product: ProductModel
}

export default function FlashSaleCard({ product }: Props) {

  let { thumbnail, name, price, percentOff } = product

  return (
    <ProductLink product={product}>
      {/* <ProductCard 
        product={product}
      /> */}
      <Card 
        variant={'unstyled'} 
        className={
          `body-secondary hover:drop-shadow-lg 
          transition-transform hover:scale-105
          p-3 max-sm:p-1
          w-flashSaleProductCard h-flashSaleProductCard
          max-sm:w-flashSaleProductCardsm max-sm:h-flashSaleProductCardsm
        `}
      >
          <CardBody>
            <Image src={thumbnail} /> 
            <Box className='h-2' />
            <Text className='text-left text-sm'>{name}</Text>
            <PriceView {...product} />
          </CardBody>
      </Card>
    </ProductLink>
  )
}

