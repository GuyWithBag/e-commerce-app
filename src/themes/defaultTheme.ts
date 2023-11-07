import { extendTheme, type ThemeConfig  } from "@chakra-ui/react"

import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: 'mono', // change the font family of the label
  },
  control: {
    padding: 3, // change the padding of the control
    borderRadius: 0, // change the border radius of the control
  },
})

let checkboxTheme = defineMultiStyleConfig({ baseStyle })

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const defaultTheme: Record<string, any> = extendTheme({
  config, 
  fonts: {
    heading: `'default', sans-serif`,
    body: `'default', sans-serif`
  }, 
  sizes: {
    categoryCardSize: '135px', 
    pageMaxWidth: '1090px', 
  },
  colors: {
    pallete: {
      100: "#071952", 
      200: "#088395", 
      300: "#35A29F", 
      400: "#F2F7A1"
    } 
  },
  space: {
    navbarPaddingX: "14%", 
    pagePaddingX: '6%', 
    navbarPaddingSmallX: "12%", 
    pagePaddingTop: "1rem", 
  }, 
  baseStyle: {
    borderRadius: '0px', 
  }
})