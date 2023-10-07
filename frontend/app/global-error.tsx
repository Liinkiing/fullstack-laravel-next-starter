'use client'

import { Button } from '@chakra-ui/react'
import type { ErrorComponent } from 'next/dist/client/components/error-boundary'

const GlobalError: ErrorComponent = ({ reset }) => (
  <html lang="en">
    <body>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </body>
  </html>
)
export default GlobalError
