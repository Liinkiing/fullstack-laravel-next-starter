import { Inter } from 'next/font/google'
import type { FC, ReactNode } from 'react'

import { AppProviders } from '~/shared/providers/AppProviders'
import { ThemeProvider } from '~/shared/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: 'Next fullstack app',
  description: 'Your next fullstack app',
}

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <html className={inter.variable} lang="en">
    <body>
      <ThemeProvider>
        <AppProviders>{children}</AppProviders>
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
