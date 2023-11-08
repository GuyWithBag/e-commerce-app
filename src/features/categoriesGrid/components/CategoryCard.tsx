import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductTypeModel } from '../../../data/productTypeModel'

type Props = {
    productType: ProductTypeModel
}

export default function CategoryCard({productType}: Props) {

  const { name, image } = productType

  return (
    <button>
      <Card
         borderRadius={'0px'} 
         className={`
            flex flex-col justify-center items-center content-center
            body-secondary drop-shadow hover:drop-shadow-xl 
            w-categoryCard transition-transform hover:scale-105
            max-sm:w-categoryCardsm max-sm:h-categoryCardsm
         `} 
      > 
          <CardBody className='flex flex-col justify-center items-center content-center'>
            <Image
                className='w-[70px]'
                src={image}
            />
            <Text className=' text-sm text-ellipsis h-[50px] '>{name}</Text>
          </CardBody>
      </Card>
    </button>
  )
}