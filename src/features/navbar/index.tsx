import React from 'react'
import NavbarButton from './components/NavbarButton'
import { defaultTheme } from '../../themes/defaultTheme'
import { AiOutlineHeart, AiOutlinePlus, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { 
  Box, Heading, IconButton,
} from '@chakra-ui/react'
import SearchBar from './components/SearchBar'
import NavBarIconButton from './components/NavBarIconButton'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineLanguage } from 'react-icons/md'
import { RiCustomerServiceLine } from 'react-icons/ri'

type Props = {}

export default function NavBar({}: Props) {

  return (
    <>
      <Box className='text-white h-16 flex items-center fixed w-[100%] bg-[#088395] shadow-md z-10'>
          <Box p="navbarPaddingX" className='flex flex-row gap-5 items-center justify-between w-[100%]'>
              <Heading fontFamily={`'Arial', sans-serif`} fontWeight={'bold'} fontSize={'30px'} className="text-2xl font-bold font-white ">
                ShopIt
              </Heading>
              <SearchBar />
              <Box className='flex flex-row'>
                <NavBarIconButton 
                  ariaLabel='Search' 
                  icon={<AiOutlineShoppingCart color='white'/>} 
                />
                <NavBarIconButton 
                  ariaLabel='Profile' 
                  icon={<BsPerson color='white'/>} 
                />
                <NavBarIconButton 
                  ariaLabel='Favorites' 
                  icon={<AiOutlineHeart color='white'/>} 
                />
                <NavBarIconButton 
                  ariaLabel='Customer Support' 
                  icon={<RiCustomerServiceLine color='white'/>} 
                />
                <NavBarIconButton 
                  ariaLabel='Languages' 
                  icon={<MdOutlineLanguage color='white'/>} 
                />
              </Box>
          </Box>
      </Box>
    </>
  )
}

