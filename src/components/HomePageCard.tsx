import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string, 
    content: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined
}

export default function HomePageCard({title, content}: Props) {
  return (
    <Box className='flex flex-col gap-1'>
        <Text>{title}</Text>
        {content}
    </Box>
  )
}

