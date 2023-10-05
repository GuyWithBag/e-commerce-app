import { Box, IconButton } from '@chakra-ui/react'
import { BiStar, BiSolidStar, BiSolidStarHalf } from 'react-icons/bi'
import React from 'react'

type Props = {
    rating: number
}

export default function StarRatings({ rating }: Props) {
    let maxRating: number = 10
    // divided by two since each star is 2 points
    let starsAmount: number = maxRating / 2
    let ratingToStarsAmount: number = rating / 2

    return (
        <Box className='flex flex-row'>
            {
                Array.from({length: starsAmount}).map((_, index) => {
                    if (index < ratingToStarsAmount) {
                        // Fucking magic idk
                        // If it's not an even number, then it's a half star 
                        // minus by 1 since it loops with an increment. 
                        // For example: 3 (index) >= 3.5 (ratingToStarsAmount) will never be true. 
                        // Minusing it will make ratingToStarsAmount less than 3 (index) 
                        // Only the last SolidStar is the one that can be halved visually. 
                        // This is done in order for us to know that this SolidStar is the last one.
                        if (index >= ratingToStarsAmount - 1 && ratingToStarsAmount % 2 != 0) {
                            return <BiSolidStarHalf color='gold' />
                        }
                        return <BiSolidStar color='gold' /> 
                    }
                    return <BiStar color='gold' />
                })
            }
        </Box>
    )
}

