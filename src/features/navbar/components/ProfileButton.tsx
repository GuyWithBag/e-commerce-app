import React, { useState } from 'react'
import NavBarLinkIconButton from './NavBarLinkIconButton'
import { BsPerson } from 'react-icons/bs'
import { Box, Text } from '@chakra-ui/react'
import DropdownMenu from '../../../components/DropdownMenu'
import DropdownMenuListItem from '../../../components/DropdownMenuListItem'
import DropdownMenuList from '../../../components/DropdownMenuList'
import DropdownMenuListItemButton from '../../../components/DropdownMenuListItemButton'

type Props = {}

export default function ProfileButton({}: Props) {

    const [ isMouseHover, setIsMouseHover ] = useState(false)

    function onMouseOver() {
        setIsMouseHover(true)
    }

    function onMouseLeave() {
        setIsMouseHover(false)
    }

    return (
        <Box>
            <NavBarLinkIconButton 
                to=''
                ariaLabel='Profile'
                icon={<BsPerson color='white' />} 
                onMouseOver={onMouseOver}
            />
            <Box onMouseLeave={onMouseLeave}>
                <DropdownMenuList visible={isMouseHover} className='bg-white p-5'>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>My Profile</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>My Orders</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>My Message</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>My Coupons</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>My Points</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>Recently Viewed</Text>
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>More Services</Text>
                    </DropdownMenuListItemButton>
                    <hr />
                    <DropdownMenuListItemButton>
                        <Text className='text-xs'>Sign Out</Text>
                    </DropdownMenuListItemButton>
                </DropdownMenuList>
            </Box>
        </Box>
    )
}