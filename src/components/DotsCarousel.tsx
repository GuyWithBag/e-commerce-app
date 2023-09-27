import { Box, IconButton, Image } from '@chakra-ui/react'
import Keyboard from '../assets/images/placeholder/keyboard-product.png'
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

type Props = {}

export default function DotsCarousel({}: Props) {
  return (
    <Box className='flex flex-row object-fill bg-green-100 h-[100%] w-[100%]'>
        <Image zIndex={''} src={Keyboard} className='h-[100%] w-[100%] object-fill' />
        {/* <Box className={`bg-test h-20 w-20`} /> */}
        <IconButton 
          aria-label='left' 
          position={'absolute'} 
          variant={'ghost'} 
          color={'white'} 
          icon={<AiOutlineLeft 
            size={'70%'}
          />}
          top={'50%'}
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
          right={'0px'}
        />
    </Box>
  )
}