import React from 'react'
import { BiRadioCircleMarked, BiRadioCircle } from 'react-icons/bi'

type Props = {
    index: number, 
    activeIndex: number
}

export default function Dots({ index, activeIndex }: Props) {
    if (index == activeIndex) {
        return (<BiRadioCircleMarked 
            color='white'
            size={'25px'}
        />)
    } else {
        return (<BiRadioCircle 
            color='white'
            size={'25px'}
        />)
    }
}