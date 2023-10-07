'use client'

import { Button } from '@chakra-ui/react'
import type { FC } from 'react'
import { FaGoogle } from 'react-icons/fa'

import { useAuth } from '~/shared/hooks/useAuth'
import { PageLayout } from '~/shared/layouts/PageLayout'

const LoginPage: FC = () => {
  const { loginWithProvider } = useAuth()

  return (
    <PageLayout>
      <PageLayout.Heading>Login</PageLayout.Heading>
      <PageLayout.Body>
        <Button leftIcon={<FaGoogle />} onClick={() => loginWithProvider('google')}>
          Connect with Google
        </Button>
      </PageLayout.Body>
    </PageLayout>
  )
}

export default LoginPage
