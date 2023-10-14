import { Button, Text, Box } from '@chakra-ui/react'
import React from 'react'
import HeaderButton from './HeaderButton'

type Props = {}

export default function Header({}: Props) {
    return (
        <Box className='flex flex-row justify-between'>
            <Box className='flex flex-row gap-3 max-sm:gap-1'>
                <HeaderButton>Category</HeaderButton>
                <HeaderButton>Status</HeaderButton>
                <HeaderButton>Filters</HeaderButton>
            </Box>
            <Box className='flex flex-row gap-2 justify-center items-center'>
                <Text className='max-sm:text-xs font-normal'>Sort By</Text>
                <HeaderButton>Recently Added</HeaderButton>
            </Box>
        </Box>
    )
}