'use client'

import { useQuery } from '@apollo/client'
import { AxiosError } from 'axios'
import type { FC, ReactNode } from 'react'
import { createContext, useEffect, useMemo, useRef, useState } from 'react'

import type { ViewerQuery } from '~/__generated__/gql/graphql'
import { ViewerDocument } from '~/__generated__/gql/graphql'
import { ApiService } from '~/services/api'
import { AuthService, FALLBACK_URL, LOGGED_IN_URL, LOGIN_URL } from '~/services/auth'
import { Redirect } from '~/shared/components/Redirect'

export type Viewer = NonNullable<ViewerQuery['viewer']>

interface Props {
  children: ReactNode
  mode: 'unauthenticated' | 'authenticated'
}

interface Context {
  viewer: Viewer | null
}

export const AuthContext = createContext<Context>({
  viewer: null,
})

export const AuthProvider: FC<Props> = ({ children, mode }) => {
  const [ready, setReady] = useState(false)
  const { data, error, loading } = useQuery(ViewerDocument, {
    skip: mode === 'unauthenticated' || !ready || !AuthService.isLoggedIn,
  })

  const context = useMemo<Context>(
    () => ({
      viewer: data?.viewer ?? null,
    }),
    [data],
  )

  useEffect(() => {
    const doFetchCsrf = async () => {
      try {
        await ApiService.csrf()
        setReady(true)
      } catch (error_) {
        if (error_ instanceof AxiosError) {
          if (error_.response?.status === 401) {
            await AuthService.logout()
          } else {
            throw error_
          }
        }
      }
    }
    doFetchCsrf()
  }, [mode])

  if (!ready || (ready && loading)) {
    return <p>Loading...</p>
  }

  if (!AuthService.isLoggedIn && mode === 'authenticated') {
    const redirectUrl = `${LOGIN_URL}?return_to=${encodeURIComponent(window.location.pathname)}`
    return <Redirect to={redirectUrl} />
  }

  if (AuthService.isLoggedIn && mode === 'unauthenticated') {
    return <Redirect to={LOGGED_IN_URL} />
  }

  if (error) {
    if (error.message.includes('Unauthenticated')) {
      window.location.pathname = FALLBACK_URL

      return null
    }
    return <Redirect to={FALLBACK_URL} />
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
