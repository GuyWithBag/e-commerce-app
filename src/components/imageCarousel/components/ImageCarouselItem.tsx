import { Box, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {
    src: string
}

export default function ImageCarouselItem({ src }: Props) {
  return (
    <Box 
      zIndex={'0'}
      className=' inline-flex items-center justify-center w-[100%]'
    >
        <Image className='' src={src}/>
    </Box>
  )
}