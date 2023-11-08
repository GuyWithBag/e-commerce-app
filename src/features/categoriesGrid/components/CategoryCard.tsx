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
            overflow-hidden
            body-secondary drop-shadow hover:drop-shadow-xl 
            w-categoryCard transition-transform hover:scale-105
            max-sm:w-categoryCardsm max-sm:h-categoryCardsm
         `} 
      > 
          <CardBody className='flex flex-col justify-center items-center content-center object-contain'>
            <Image
                className='w-[50px] object-scale-down max-sm:w-[20px]'
                src={image}
            />
            <Text className=' text-xs text-ellipsis overflow-hidden max-h-[20px]'>{name}</Text>
          </CardBody>
      </Card>
    </button>
  )
}