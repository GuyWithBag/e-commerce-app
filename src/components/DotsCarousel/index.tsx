import { Box, Button, IconButton, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import DotsCarouselItem from './components/DotsCarouselItem'
import Dots from './components/Dots'

type Props = {
  items: string[]
}

export default function DotsCarousel({ items }: Props) {

  let [ activeIndex, setActiveIndex ] = useState(0) 

  function updateIndex(index: number): void {
    let newIndex: number = index
    if (index < 0) {
      newIndex = 0
    } else if ( index >= items.length ) {
      newIndex = items.length - 1
    }
    setActiveIndex(newIndex)
  }
  // h-[320px]
  return (
    <Box>
      <Box className='flex bg-red-400  w-[100%] overflow-x-hidden overflow-y-hidden justify-center'>
        <Box 
          className='whitespace-nowrap transition-transform' 
          style={{
            transform: `translate(-${activeIndex * 100}%)`
          }}
        >
          {items.map((item) => (
            <DotsCarouselItem src={item}/> 
          ))}
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
        top={'40%'}
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
        top={'40%'}
        right={'0%'}
        onClick={() => updateIndex(activeIndex + 1)}
      />
      <Box 
        bottom={'0%'} 
        right={'28%'} 
        position={'absolute'}
        className='grid grid-rows-1 grid-flow-col gap-2 justify-center items-center place-content-end max-sm:scale-75 max-sm:!right-[20%]' 
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