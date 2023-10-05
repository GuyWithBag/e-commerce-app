import { Box, Button, IconButton, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Keyboard from '../../assets/images/placeholder/keyboard-product.png'
import ImageCarouselItem from './components/ImageCarouselItem'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

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
    <Box className='flex flex-col gap-2 justify-center items-center'>
      <Box className='flex bg-red-400 h-[420px] w-[420px] overflow-x-hidden overflow-y-hidden justify-center'>
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
      <Box className='flex flex-row gap-2 justify-center items-center'>
        <IconButton 
          aria-label='left' 
          variant={'ghost'} 
          icon={<AiOutlineLeft 
            size={'70%'}
          />}
          onClick={() => updateIndex(activeIndex - 1)}
        />
        <Box className='flex flex-row gap-2'>
            {items.map((image, index) => (
              <button
                onClick={() => updateIndex(index)}
              >
                <Image h={'50px'} w={'50px'} src={image} />
              </button>
            ))}
        </Box>
        <IconButton 
          aria-label='left' 
          variant={'ghost'} 
          icon={<AiOutlineRight 
            size={'70%'}
          />}
          onClick={() => updateIndex(activeIndex + 1)}
        />
      </Box>
    </Box>
  )
}

