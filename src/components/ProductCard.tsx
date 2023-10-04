import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
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
  
  let { thumbnail, name } = product

  function ifHasChildren(): ReactNode {
    if (children === null) {
      return <ProductCardHover product={product} />
    }
    return children
  }

  return (
    <ProductLink product={product}>
      <Card borderRadius={'0px'} h={'productCardH'}  w={'productCardW'} className='bg-white drop-shadow justify-start'>
          <CardBody p={'0px'} className='flex flex-col items-center justify-start hover:drop-shadow-xl'>
            {/* hover:visible and invisible doesn't work for some reason */}
              {/* <Box zIndex={10} className='absolute w-[100%] h-[100%] hover:!visible !invisible '>
                <ProductCardHover product={product} />
              </Box> */}
              <Image src={thumbnail} />
              <Box className='p-2 flex flex-col items-start justify-start w-[100%] h-[100%]'>
                <Text className='text-sm'>{name}</Text>
                <PriceView {...product} />
                <StarRatings rating={3} />
              </Box>
          </CardBody>
      </Card>
    </ProductLink>
  )
}
