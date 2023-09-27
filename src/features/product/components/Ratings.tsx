import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import StarRatings from '../../../components/StarRatings'

type Props = {}

export default function Ratings({}: Props) {
  return (
    <Box className='flex flex-row gap-1'>
        <StarRatings rating={5} />
        <Text>1000 ratings</Text>
        <Text>12k sold</Text>
    </Box>
  )
}

