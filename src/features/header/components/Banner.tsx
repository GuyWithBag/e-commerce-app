import { Box } from '@chakra-ui/react'
import React from 'react'
import DotsCarousel from '../../../components/DotsCarousel'
import BannerImage from '../../../assets/images/banners/reallyBadBanner.png'

type Props = {}

export default function Banner({}: Props) {
  return (
    <Box className='bg-blue-100'>
      <DotsCarousel items={[
        BannerImage, 
        BannerImage, 
        BannerImage, 
        BannerImage, 
        BannerImage
      ]}/>
    </Box>
  )
}
