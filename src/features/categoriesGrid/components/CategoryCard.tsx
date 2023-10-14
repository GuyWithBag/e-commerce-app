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
         borderRadius={'0px'} 
         className={`
          flex flex-col justify-center items-center
          p-2 bg-white drop-shadow hover:drop-shadow-xl 
          w-categoryCard 
          max-sm:w-categoryCardsm max-sm:h-categoryCardsm
         `}
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