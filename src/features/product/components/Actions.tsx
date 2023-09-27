import { Box } from '@chakra-ui/react'
import React from 'react'
import Ratings from './Ratings'
import AddToWishlistButton from '../../../components/AddToWishlistButton'
import ShareButton from '../../../components/ShareButton'

type Props = {}

export default function Actions({}: Props) {
  return (
    <Box className='flex flex-row justify-between'>
        <Ratings /> 
        <Box className='flex flex-row'>
            <AddToWishlistButton /> 
            <ShareButton /> 
        </Box>
    </Box>
  )
}