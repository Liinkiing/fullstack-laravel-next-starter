'use client'

import { Link } from '@chakra-ui/next-js'
import type { FC } from 'react'

import { useAuth } from '~/shared/hooks/useAuth'
import { PageLayout } from '~/shared/layouts/PageLayout'

const HomePage: FC = () => {
  const { viewer, logout } = useAuth()
  return (
    <PageLayout>
      <PageLayout.Heading>Home</PageLayout.Heading>
      <PageLayout.Body>
        <p>
          Hi {viewer.name} ({viewer.email})
        </p>
        <Link href="/settings">Settings</Link>
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      </PageLayout.Body>
    </PageLayout>
  )
}

export default HomePage
