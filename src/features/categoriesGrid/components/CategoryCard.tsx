import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    image: string, 
    name: string
}

export default function CategoryCard({image, name}: Props) {
  return (
    <button>
      <Card
         borderRadius={'0px'} h={'categoryCardSize'} w={'categoryCardSize'} className='flex flex-col h-auto w-auto justify-center items-center p-2 bg-white drop-shadow hover:drop-shadow-xl'
      >
          <CardBody>
            <Image
                className='w-[70px]'
                src={image}
            /> 
            <Text>{name}</Text>
          </CardBody>
      </Card>
    </button>
  )
}