import { Box } from '@chakra-ui/react'
import React from 'react'
import DotsCarousel from '../../../components/DotsCarousel'

type Props = {}

export default function Banner({}: Props) {
  return (
    <Box className='w-[80%] bg-gray-100'>
      <DotsCarousel />
    </Box>
  )
}
