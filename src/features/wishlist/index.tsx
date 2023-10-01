import { Box, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import ProductCardList from '../../components/ProductCardList'
import { testProd } from '../../placeholder'
import ProductCard from '../../components/ProductCard'

type Props = {}

export default function WishList({}: Props) {
  return (
    <Box className='flex flex-row'>
      {/* Personal center??  */}
      <Box>

      </Box>
      <Box className='flex flex-col'>
        <Heading>My Wishlist</Heading>
        <Box className='flex flex-row justify-between'>
          <Box className='flex flex-row gap-3'>
            <Button>Category</Button>
            <Button>Status</Button>
            <Button>Filters</Button>
          </Box>
          <Box className='flex flex-row gap-2 justify-center items-center'>
            <Text>Sort By</Text>
            <Button>Recently Added</Button>
          </Box>
        </Box>
        <ProductCardList columns={5}>
          <ProductCard {...testProd} />
          <ProductCard {...testProd} />
          <ProductCard {...testProd} />
          <ProductCard {...testProd} />
          <ProductCard {...testProd} />
          <ProductCard {...testProd} />
        </ProductCardList>
      </Box>
    </Box>
  )
}