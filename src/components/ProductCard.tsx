import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import { ProductModel } from '../data/productModel'
import PriceView from './PriceView'
import StarRatings from './StarRatings'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import ProductLink from './ProductLink'
import ProductCardHover from './ProductCardHover'

type Props = {
    product: ProductModel, 
    children?: any
}

export default function ProductCard({ product, children }: Props) {
  
  let { thumbnail, name, rating } = product
  const [ isMouseHover, setIsMouseHover ] = useState(false)

  function onMouseOver() {
    setIsMouseHover(true)
  }

  function onMouseLeave() {
    setIsMouseHover(false)
  }

  return (
      <Card 
        borderRadius={'0px'} 
        className={`
          bg-white drop-shadow justify-start transition-transform ${isMouseHover ? 'scale-105' : ''} 
          w-productCard h-productCard 
          max-sm:w-productCardsm max-sm:h-productCardsm
        `}
        onMouseOver={onMouseOver} 
        onMouseLeave={onMouseLeave} 
      >
          <Box 
            zIndex={10} 
            className={`absolute flex flex-col justify-start ${isMouseHover ? 'visible' : 'invisible'} `}
            top={'50%'}
            left={'50%'}
          >
            <ProductCardHover product={product}>
              {children}
            </ProductCardHover>
          </Box>
          <ProductLink product={product}>
            <CardBody p={'0px'} className='flex flex-col items-center justify-start hover:drop-shadow-xl'>
                <Image src={thumbnail} />
                <Box className='p-2 flex flex-col items-start justify-start w-[100%] h-[100%]'>
                  <Text className='text-sm'>{name}</Text>
                  <PriceView {...product} />
                  <StarRatings rating={rating} />
                </Box>
            </CardBody>
          </ProductLink>
      </Card>
  )
}
