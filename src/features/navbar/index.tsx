import React, { useState } from 'react'
import NavbarButton from './components/NavbarButton'
import { defaultTheme } from '../../themes/defaultTheme'
import { AiOutlineHeart, AiOutlineMenu, AiOutlinePlus, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import {
  Box, Button, Heading, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure,
} from '@chakra-ui/react'
import SearchBar from './components/SearchBar'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineLanguage } from 'react-icons/md'
import { RiCustomerServiceLine } from 'react-icons/ri'
import NavBarLinkIconButton from './components/NavBarLinkIconButton'
import NavBarLinkButton from './components/NavBarLinkButton'
import ProfileButton from './components/ProfileButton'
import NavbarMenu from './components/NavbarMenu'
import DarkModeToggle from '../../components/DarkModeToggle'

type Props = {}

export type NavbarItem = {
  title: string, 
  to: string, 
  icon: any, 
  options?: NavbarItemOption[]
}

export type NavbarItemOption = {
  title: string, 
  to: string
}

export default function NavBar({ }: Props) {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const items: NavbarItem[] = [
    {
      title: 'Profile', 
      to: '', 
      icon: <BsPerson color='white' />,  
      options: [
        {
          title: 'My Profile', 
          to: ''
        }, 
        {
          title: 'My Orders', 
          to: ''
        }, 
        {
          title: 'My Message', 
          to: ''
        }, 
        {
          title: 'My Coupons', 
          to: ''
        }, 
        {
          title: 'Recently Viewed', 
          to: ''
        }, 
        {
          title: 'Customer Services', 
          to: ''
        }, 
        {
          title: 'Sign Out', 
          to: ''
        }, 
      ]
    }, 
    {
      title: 'Shopping Cart', 
      to: '/shopping-cart', 
      icon: <AiOutlineShoppingCart color='white' />, 
    }, 
    {
      title: 'Wish list', 
      to: '/wish-list', 
      icon: <AiOutlineHeart color='white' />
    }, 
    {
      title: 'Customer Support', 
      to: '', 
      icon: <RiCustomerServiceLine color='white' />
    }, 
    {
      title: 'Languages', 
      to: '', 
      icon: <MdOutlineLanguage color='white' />
    }, 
  ]

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Box px={'pagePaddingX'} bgColor={'pallete.200'} className='text-white h-16 flex justify-center items-center sticky w-[100%] shadow-md z-10 top-0'>
        <Box maxW={'pageMaxWidth'} className='w-[100%] flex flex-row gap-2 justify-between'>

          <Box className='flex flex-row justify-center items-center gap-2'>
            <AiOutlineShoppingCart size={'30px'} />
            <NavBarLinkButton to='/' variant={'unstyled'}>
              <Heading fontFamily={`'Arial', sans-serif`} fontWeight={'bold'} fontSize={'30px'} className="text-2xl font-bold font-white ">
                ShopIt
              </Heading>
            </NavBarLinkButton>
          </Box>

          <SearchBar />
          <Box className=' hidden max-sm:block'>
            <IconButton aria-label='Sidebar button' icon={<AiOutlineMenu />} onClick={toggleMenu}/>
          </Box>

          <Box className='max-sm:hidden'>
            <Box className='flex flex-row'>
              <DarkModeToggle />
              {items.map(({to, title, icon}) => (
                <NavBarLinkIconButton 
                  to={to}
                  ariaLabel={title}
                  icon={icon}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Navbar menu when it is in mobile mode */}
        <Box className={`${isMenuOpen ? 'fixed' : 'hidden'} z-20`}>
          <NavbarMenu 
            items={items} 
            onCloseClick={toggleMenu}
          />
        </Box>
      </Box>
    </>
  )
}

