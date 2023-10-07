import type { ChakraProps } from '@chakra-ui/react'

export const FOCUS_PROPS = {
  _focusVisible: {
    outline: 'none',
    boxShadow: 'outline',
  },
  transitionProperty: 'common',
  transitionDuration: 'duration-200',
} satisfies ChakraProps
