import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, IconButton, Text } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import { NavbarItem, NavbarItemOption } from '..'
import NavBarLinkButton from './NavBarLinkButton'

type Props = {
    items: NavbarItem[], 
    onCloseClick: MouseEventHandler, 
} 

export default function NavbarMenu({ items, onCloseClick }: Props) {

    function getOption(options: NavbarItemOption[] | undefined, { title, to }: NavbarItemOption) {
        if (options === undefined) {
            return 
        }
        return (
            <NavBarLinkButton variant={'ghost'} to={to} onClick={onCloseClick}> 
                {title} 
            </NavBarLinkButton>
        )
    }

    return (
        <Box bgColor={'pallete.200'} className='w-[100%] h-[100%] flex flex-col gap-3 fixed py-3'>
            <Box className='flex flex-row items-center justify-end px-9'>
                <IconButton aria-label='close' icon={<AiOutlineClose />} onClick={onCloseClick}/>
            </Box>
            <Box className='px-10 flex flex-col gap-3'> 
                <NavBarLinkButton variant={'ghost'} to={'/'} className='flex flex-row gap-4' onClick={onCloseClick}>
                    <AiOutlineHome />
                    <Text>Home</Text>
                </NavBarLinkButton>
                {
                    items.map(({to, icon, title}) => {
                        if (to === '') {
                            return
                        }
                        return (
                            <NavBarLinkButton variant={'ghost'} to={to} className='flex flex-row gap-4' onClick={onCloseClick}>
                                {icon}
                                <Text>{title}</Text>
                            </NavBarLinkButton>
                        )
                    })
                }
                <Accordion> 
                    {
                        items.map(({to, title, icon, options}) => {
                            if (to !== '') {
                                return
                            }
                            return (
                                <AccordionItem className=' my-5'>
                                    <AccordionButton>
                                        <Box className='flex flex-row justfiy-between items-center gap-4 py-3'>
                                            {icon}
                                            <Text color={'white'} className='text-lg font-bold'>{title}</Text>
                                        </Box>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <Box className='flex flex-col'>
                                            {
                                                items.map((item) => (
                                                    getOption(options, item)
                                                ))
                                            }
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </Box>
        </Box>
  )
}