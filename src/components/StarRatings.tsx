import { Box, IconButton } from '@chakra-ui/react'
import { BiStar, BiSolidStar, BiSolidStarHalf } from 'react-icons/bi'
import React from 'react'

type Props = {
    rating: number
}

export default function StarRatings({ rating }: Props) {
    let maxRating: number = 10
    let starsAmount: number = maxRating / 2
    let ratingToStarsAmount: number = rating / maxRating

    return (
        <Box className='flex flex-row'>
            {
                Array.from({length: starsAmount}).map((_, index) => {
                    if (index < ratingToStarsAmount) {
                        return <BiSolidStar color='gold' /> 
                    }
                    return <BiStar color='gold' />
                })
            }
        </Box>
    )
}

