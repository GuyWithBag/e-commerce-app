import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Keyboard from '../../assets/images/placeholder/keyboard-product.png'
import ImageCarouselItem from './components/ImageCarouselItem'

type Props = {
  images: string[]
}

export default function ImageCarousel({ images }: Props) {
  
  let [ activeIndex, setActiveIndex ] = useState(0) 

  let items: string[] = [
    Keyboard, 
    Keyboard, 
    Keyboard
  ]

  function updateIndex(index: number): void {
    let newIndex: number = index
    if (index < 0) {
      newIndex = 0
    } else if ( index >= items.length ) {
      newIndex = items.length - 1
    }
    setActiveIndex(newIndex)
  }

  return (
    <Box>
      <Box className='flex bg-red-400 h-[320px] w-[100%] overflow-x-hidden overflow-y-hidden justify-center'>
        <Box 
          className='whitespace-nowrap transition-transform' 
          style={{
            transform: `translate(-${activeIndex * 100}%)`
          }}
        >
          {
            items.map((value, index) => (<ImageCarouselItem src={value} />))
          }
        </Box>
      </Box>
    </Box>
  )
}

