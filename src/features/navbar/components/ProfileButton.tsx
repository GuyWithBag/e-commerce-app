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
                        My Profile
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        My Orders
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        My Message
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        My Coupons
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        My Points
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        Recently Viewed
                    </DropdownMenuListItemButton>
                    <DropdownMenuListItemButton>
                        More Services
                    </DropdownMenuListItemButton>
                    <hr />
                    <DropdownMenuListItemButton>
                        Sign Out
                    </DropdownMenuListItemButton>
                </DropdownMenuList>
            </Box>
        </Box>
    )
}