import { Box, Button, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

type Props = {}

export default function SearchResultsHeader({}: Props) {
  return (
    <Box className='flex flex-row justify-between gap-5 bg-white p-3 drop-shadow'>
        <Box className='flex flex-row gap-5 items-center'>
            <Text>Sort By</Text>
            <Button borderRadius={0}>Relevance</Button>
            <Button borderRadius={0}>Latest</Button>
            <Button borderRadius={0}>Top Sales</Button>
            <Button borderRadius={0}>Price</Button>
        </Box>
        <Box className='flex flex-row gap-5 items-center'>
            <Text>1/4</Text>
            <Box className='flex flex-row'>
                <IconButton borderRadius={0} aria-label='back' icon={<AiOutlineLeft />} />
                <IconButton borderRadius={0} aria-label='next' icon={<AiOutlineRight />} />
            </Box>
        </Box>
    </Box>
  )
}

