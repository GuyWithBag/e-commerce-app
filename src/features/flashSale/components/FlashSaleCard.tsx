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

  const [ isMouseHover, setIsMouseHover ] = useState(false)

  function onMouseOver() {
    setIsMouseHover(true)
  }

  function onMouseLeave() {
    setIsMouseHover(false)
  }

  return (
    <ProductLink product={product}>
      {/* <ProductCard 
        product={product}
      /> */}
      <Card 
        variant={'unstyled'} 
        className={
          `bg-white hover:drop-shadow-lg 
          transition-transform ${isMouseHover ? 'scale-105' : ''} 
          p-3 max-sm:p-1
          w-flashSaleProductCard h-flashSaleProductCard
          max-sm:w-flashSaleProductCardsm max-sm:h-flashSaleProductCardsm
        `}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave} 
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

