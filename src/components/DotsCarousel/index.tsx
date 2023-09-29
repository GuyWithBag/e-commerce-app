import { Box, Button, IconButton, Image } from '@chakra-ui/react'
import Keyboard from '../../assets/images/placeholder/keyboard-product.png'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import DotsCarouselItem from './components/DotsCarouselItem'
import Dots from './components/Dots'

type Props = {}

export default function DotsCarousel({}: Props) {

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
          <DotsCarouselItem src={Keyboard}/> 
          <DotsCarouselItem src={Keyboard}/> 
          <DotsCarouselItem src={Keyboard}/> 
        </Box>
      </Box>
      <IconButton 
        aria-label='left' 
        position={'absolute'} 
        variant={'ghost'} 
        color={'white'} 
        icon={<AiOutlineLeft 
          size={'70%'}
        />}
        top={'50%'}
        onClick={() => updateIndex(activeIndex - 1)}
      />
      <IconButton 
        aria-label='left' 
        position={'absolute'} 
        variant={'ghost'} 
        color={'white'} 
        icon={<AiOutlineRight 
          size={'70%'}
        />}
        top={'50%'}
        right={'0%'}
        onClick={() => updateIndex(activeIndex + 1)}
      />
      <Box 
        bottom={'0%'} 
        right={'35%'} 
        position={'absolute'}
        className='grid grid-cols-3 gap-2 justify-center items-center place-content-end ' 
        zIndex={'10'}
      >
        {items.map((item, index) => (
          <IconButton
            variant={'unstyled'}
            aria-label='dot' 
            onClick={() => updateIndex(index)}
          >
            <Dots index={index} activeIndex={activeIndex} /> 
          </IconButton>
        ))}
      </Box>
    </Box>
  )
}