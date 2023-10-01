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
import NavBarLinkButton from './components/NavBarLinkButton'

type Props = {}

export default function NavBar({}: Props) {

  return (
    <>
      <Box px="navbarPaddingX" bgColor={'pallete.200'} className='text-white gap-5 h-16 flex justify-between items-center fixed w-[100%] shadow-md z-10'>
        <Heading fontFamily={`'Arial', sans-serif`} fontWeight={'bold'} fontSize={'30px'} className="text-2xl font-bold font-white ">
          ShopIt
        </Heading>
        <SearchBar />
        <Box className='flex flex-row'>
          <NavBarLinkButton to='/ShoppingCart'
            ariaLabel='Search' 
            icon={<AiOutlineShoppingCart color='white'/>} 
          />
          <NavBarLinkButton to=''
            ariaLabel='Profile' 
            icon={<BsPerson color='white'/>} 
          />
          <NavBarLinkButton to=''
            ariaLabel='Favorites' 
            icon={<AiOutlineHeart color='white'/>} 
          />
          <NavBarLinkButton to=''
            ariaLabel='Customer Support' 
            icon={<RiCustomerServiceLine color='white'/>} 
          />
          <NavBarLinkButton to='' 
            ariaLabel='Languages' 
            icon={<MdOutlineLanguage color='white'/>} 
          />
        </Box>
      </Box>
    </>
  )
}

