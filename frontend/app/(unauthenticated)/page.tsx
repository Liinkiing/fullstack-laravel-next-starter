'use client'

import { Link } from '@chakra-ui/next-js'
import type { FC } from 'react'

import { PageLayout } from '~/shared/layouts/PageLayout'

const HomePage: FC = () => (
  <PageLayout>
    <PageLayout.Heading>Hello</PageLayout.Heading>
    <PageLayout.Body>
      <Link href="/login">Go to login page</Link>
    </PageLayout.Body>
  </PageLayout>
)

export default HomePage
