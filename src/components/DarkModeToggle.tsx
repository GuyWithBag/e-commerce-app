import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { useDarkModeStore } from '../data/stores/darkModeStore'
import { BsFillMoonFill, BsFillSunFill, BsMoon, BsSun } from 'react-icons/bs'

type Props = {}

export default function DarkModeToggle({}: Props) {
    const isDarkMode = useDarkModeStore((store: any) => store.isDarkMode)
    const toggleDarkMode = useDarkModeStore((store: any) => store.toggleDarkMode)
    const setDarkMode = useDarkModeStore((store: any) => store.setDarkMode)

    function onClick() {
        setDarkMode(!isDarkMode)
    }

    return (
    <IconButton 
        aria-label='Dark Mode Toggle'
        icon={isDarkMode ? <BsFillSunFill color='white' /> : <BsMoon color='white' />}
        variant={'ghost'}
        onClick={onClick}
    />
  )
}