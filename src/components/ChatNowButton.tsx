import { Button, Text } from '@chakra-ui/react' 
import { IoMdChatboxes } from 'react-icons/io'
import React from 'react'

type Props = {}

export default function ChatNowButton({}: Props) {
  return (
    <Button borderColor={'pallete.200'} borderRadius={'0px'} p={'5px'} color={'pallete.200'} variant={'outline'} className='flex flex-row gap-1'>
      <IoMdChatboxes /> 
      <Text className='text-sm'>Chat Now</Text>
    </Button>
  )
}