import { Box, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <Box className='flex flex-row w-[70%]'>
        <Input />
        <IconButton aria-label='Search' icon={<AiOutlineSearch />} />
    </Box>
  )
}
