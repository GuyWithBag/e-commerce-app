import { Box, Image, Radio, Text } from '@chakra-ui/react'
import React from 'react'
import PriceView from '../../../components/PriceView'
import { testProd } from '../../../placeholder'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'

type Props = {}

export default function ShoppingCartItem({}: Props) {
  return (
    <Box className='flex flex-row bg-white'>
        <Box className='flex flex-row gap-4]'>
            <Radio /> 
            <Image className=' w-32 h-32'/> 
            <Box className='flex flex-col justify-between'>
                <Text>Name</Text>
                {/* Why u no work properly huhu */}
                <Box className='flex flex-row justify-between items-end bg-red-400'>
                    <PriceView {...testProd} /> 
                    <Box className='flex flex-row gap-3'>
                        {/* 
                            Inspired from Shein ShoppingCart
                            Spin Box here for adding more
                            Search Icon for finding more similar items
                            Add to wishlist button
                            delete
                        */}
                        <AiOutlineSearch /> 
                        <AiOutlineHeart /> 
                        <BsTrash3 />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}