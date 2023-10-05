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
  const [ showProductHover, setShowProductHover ] = useState(false)

  // function ifHasChildren(): ReactNode {
  //   if (children === null) {
  //     return <ProductCardHover product={product} />
  //   }
  //   return children
  // }

  return (
      <Card 
        borderRadius={'0px'} 
        h={'productCardH'}  
        w={'productCardW'} 
        className='bg-white drop-shadow justify-start'
        onMouseOver={() => {setShowProductHover(true)}} 
        onMouseLeave={() => {setShowProductHover(false)}}
      >
          <Box 
            zIndex={10} 
            className={`absolute flex flex-col justify-start ${showProductHover ? 'visible' : 'invisible'} `}
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
