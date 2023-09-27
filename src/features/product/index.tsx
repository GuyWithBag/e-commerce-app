import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductModel } from '../../data/productModel'
import ProductCarousel from './components/ProductCarousel'
import Details from './components/Details'
import Variants from './components/Variants'
import AddToCartButton from './components/AddToCartButton'
import QuantityButton from './components/QuantityButton'
import Actions from './components/Actions'
import PriceView from '../../components/PriceView'
import BuyNowButton from './components/BuyNowButton'
import StarRatings from '../../components/StarRatings'


export default function Product( product: ProductModel) {

  let { brand, description, name } = product

  return (
    <Box className='flex flex-col gap-2'>
      <Box className='grid grid-cols-2 bg-white drop-shadow'>
        <ProductCarousel {...product}/> 
        <Box className='flex flex-col p-5 gap-5'>
          <Details {...product}/> 
          <Actions /> 
          <Text className=' text-sm'>
            Brand: 
            <span> {brand} </span>
          </Text>
          <PriceView {...product} />
          <Variants {...product}/> 
          <QuantityButton /> 
          <Box className='flex flex-row gap-2 items-stretch'>
            <BuyNowButton {...product} className='flex-1' />
            <AddToCartButton {...product} className='flex-1' /> 
          </Box>
        </Box>
      </Box>
      {/* Company Details */}
      <Box className='grid grid-rows-4 bg-white drop-shadow'>
        <Box className='flex flex-col'>
          <Box>

          </Box>
        </Box>
      </Box> 
      {/* Specifications / Description */}
      <Box className='grid grid-cols-2 bg-white drop-shadow p-5 h-32'>
        <Text className=' text-lg '>Product details of {name}</Text>
        <br />
        <Text className=' text-md'>{description}</Text>
      </Box> 
      {/* Review And Comments */}
      <Box className='flex flex-col gap-4 p-5 bg-white drop-shadow'>
        <text>Ratings & Reviews of {name}</text>
        <Box className='flex flex-row gap-1'>
          <Box className='flex flex-col gap-1'>
            <Text>4.9/5</Text>
            <StarRatings rating={1} />
            <text>1000 Ratings</text>
          </Box>
          <Box className='flex flex-col gap-1'>
            <Box className='flex flex-row gap-2'>
              <StarRatings rating={1} />
            </Box>
          </Box>
        </Box>
        <Box className='flex flex-col gap-1'>
          <hr />
          <Box className='flex flex-row gap-2'>
            <Text>Product Reviews</Text>

          </Box>
          <hr />
        </Box>
        <Box>

        </Box>
      </Box> 
    </Box>
  )
}
