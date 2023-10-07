'use client'

import { Button, Text } from '@chakra-ui/react'
import type { ErrorComponent } from 'next/dist/client/components/error-boundary'

import { PageLayout } from '~/shared/layouts/PageLayout'

const Error: ErrorComponent = ({ error, reset }) => {
  return (
    <PageLayout>
      <PageLayout.Heading>An error occurred</PageLayout.Heading>
      <PageLayout.Body>
        <Text>See the following message</Text>
        <code>
          <pre>{error.message}</pre>
        </code>
        <Button variant="solid" onClick={() => reset()}>
          Retry
        </Button>
      </PageLayout.Body>
    </PageLayout>
  )
}

export default Error
