'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraBaseProvider } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

import { theme } from '~/theme'

interface Props {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => (
  <CacheProvider>
    <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
  </CacheProvider>
)
