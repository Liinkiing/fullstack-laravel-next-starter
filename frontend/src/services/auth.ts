import Cookies from 'js-cookie'

import { ApiService } from '~/services/api'

export const LOGIN_URL = '/login'
export const LOGGED_IN_URL = '/home'
export const FALLBACK_URL = '/'

export type AuthProvider = 'google'

class AuthServiceApp {
  get isLoggedIn(): boolean {
    return Cookies.get('odr_logged_in') === 'true'
  }

  public async login({
    email,
    password,
    returnTo,
  }: {
    email: string
    password: string
    returnTo?: string | null
  }): Promise<void> {
    const { error } = await ApiService.login({ email, password })
    if (error) {
      // eslint-disable-next-line no-alert
      window.alert(error)
    } else {
      window.location.href = returnTo ?? LOGGED_IN_URL
    }
  }

  public loginWithProvider(provider: AuthProvider): void {
    window.location.pathname = `/api/auth/${provider}/redirect`
  }

  public async logout(): Promise<any> {
    await ApiService.logout()

    window.location.pathname = FALLBACK_URL
  }
}

export const AuthService = new AuthServiceApp()
