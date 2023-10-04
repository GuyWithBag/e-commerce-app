import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductModel } from '../../data/productModel'
import Details from './components/Details'
import Variants from './components/Variants'
import AddToCartButton from './components/AddToCartButton'
import QuantityButton from './components/QuantityButton'
import Actions from './components/Actions'
import PriceView from '../../components/PriceView'
import BuyNowButton from './components/BuyNowButton'
import StarRatings from '../../components/StarRatings'
import ProductCard from '../../components/ProductCard'
import { gamingKeyboardProduct, products } from '../../placeholder'
import HomePageCard from '../../components/HomePageCard'
import ProductCardList from '../../components/ProductCardList'
import ChatNowButton from '../../components/ChatNowButton'
import CompanyDetail from './components/CompanyDetail'
import CompanyDetailTile from './components/CompanyDetailTile'
import ViewShopButton from '../../components/ViewShopButton'
import ImageCarousel from '../../components/imageCarousel'
import { useParams } from 'react-router-dom'
import { StringParam, useQueryParams } from 'use-query-params'

type Props = {

}

export default function Product({}: Props) {

  const { productID } = useParams()
  const product: ProductModel = products.find((product) => product.id === productID)!

  // ToDo: we dont reallyhave anything state management related yet lol, tutorial: https://www.npmjs.com/package/use-query-params
  // const [ query, setQuery ] = useQueryParams({
  //   brand: StringParam, 
  //   description: StringParam, 
  //   name: StringParam, 
  //   images: StringParam, 
  // })

  const { brand, description, name, images } = product

  return (
    <Box className='flex flex-col gap-2'>
      <Box className='grid grid-cols-2 bg-white drop-shadow'>
        <ImageCarousel {...product}/> 
        <Box className='flex flex-col p-5 gap-5'>
          <Details {...product}/> 
          <Actions product={product} /> 
          <Text className=' text-sm'>
            Brand: 
            <span> {brand} </span>
          </Text>
          <PriceView {...product} />
          <Variants {...product}/>
          <Box className='flex flex-row gap-3 items-center'>
            <Text>Quantity:</Text>
            <QuantityButton /> 
          </Box>
          <Box className='flex flex-row gap-2 items-stretch'>
            <BuyNowButton product={product} className='flex-1' />
            <AddToCartButton product={product} quantity={1} className='flex-1' /> 
          </Box>
        </Box>
      </Box>
      {/* Company Details */}
      <Box 
        className='grid content-center p-5 gap-3 bg-white drop-shadow' 
        style={{
          gridTemplateColumns: ' 1.4fr repeat(3, minmax(0, 1fr))' 
        }}
      >
        <Box className='flex flex-row gap-3 border-r-2'>
          <Box>
            {/* ToDo: This is a placeholder, replace with brand image */}
            <Image w={'90px'} h={'90px'} className=' rounded-full ' src={images[0]}/>
          </Box>
          <Box className='text-sm flex flex-col gap-2 justify-evenly'>
            <Text className=' font-bold '>{brand}</Text>
            <Text className=' text-sm ' >Active 44 Minutes Ago</Text>
            <Box className='flex flex-row gap-2'>
              <ChatNowButton />
              <ViewShopButton />
            </Box>
          </Box>
        </Box>
        <CompanyDetailTile>
          <CompanyDetail 
            property='Ratings'
            value='627.3k'
          />
          <CompanyDetail 
            property='Products'
            value='125'
          />
        </CompanyDetailTile>
        <CompanyDetailTile>
          <CompanyDetail 
            property='Response Rate'
            value='86%'
          />
          <CompanyDetail 
            property='Response Time'
            value='within hours'
          />
        </CompanyDetailTile>
        <CompanyDetailTile>
          <CompanyDetail 
            property='Joined'
            value='69 years ago'
          />
          <CompanyDetail 
            property='Followers'
            value='125.7k'
          />
        </CompanyDetailTile>

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
      {/* From The Same Store */}
      <HomePageCard title='FROM THE SAME STORE'>
        <ProductCardList columns={6}>
          <ProductCard product={gamingKeyboardProduct} /> 
        </ProductCardList>
      </HomePageCard>
      {/* You may also like */}
      <HomePageCard title='YOU MAY ALSO LIKE'>
        <ProductCardList columns={6}>
          <ProductCard product={gamingKeyboardProduct} /> 
        </ProductCardList>
      </HomePageCard>
    </Box>
  )
}
