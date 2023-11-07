import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { useDarkModeStore } from '../data/stores/darkModeStore'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

type Props = {}

export default function DarkModeToggle({}: Props) {
    const isDarkMode = useDarkModeStore((store: any) => store.isDarkMode)
    const toggleDarkMode = useDarkModeStore((store: any) => store.toggleDarkMode)

    function onClick() {
        toggleDarkMode()
        if (isDarkMode) {
            document.querySelector("body")?.setAttribute("data-theme", "dark")
        } else {
            document.querySelector("body")?.setAttribute("data-theme", "light")
        }
    }

    return (
    <IconButton 
        aria-label='Dark Mode Toggle'
        icon={isDarkMode ? <BsFillMoonFill color='white' /> : <BsSun color='white' />}
        variant={'ghost'}
        onClick={onClick}
    />
  )
}