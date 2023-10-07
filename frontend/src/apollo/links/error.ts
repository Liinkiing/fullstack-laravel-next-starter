import { ErrorLink } from 'apollo-link-error'
import type { ServerError } from 'apollo-link-http-common'

const INTERNAL_ERROR_FALLBACK_MESSAGE = 'There seems to be an error. Please try again later or contact support.'
const INTERNAL_ERRORS_MESSAGES = new Set(['Internal server error', 'Internal server error.'].map(v => v.toLowerCase()))

const DENIED_MESSAGE = 'Unauthenticated.'

export default new ErrorLink(({ graphQLErrors, networkError }) => {
  if (
    graphQLErrors &&
    graphQLErrors
      .filter(gqlError => !gqlError.path?.includes('viewer'))
      .map(gqlError => gqlError.message)
      .join(', ')
      .includes(DENIED_MESSAGE) &&
    __DEV__
  ) {
    // eslint-disable-next-line no-console
    console.warn('Tried to access to a ressource which does not seems to belong to the logged in user. Forbid it.')
  }
  if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0].message) {
    const error = graphQLErrors[0]
    let message = 'debugMessage' in error ? (error as any).debugMessage : error.message
    if (INTERNAL_ERRORS_MESSAGES.has(message.toLowerCase())) {
      message = INTERNAL_ERROR_FALLBACK_MESSAGE
    }
    if (
      error.extensions &&
      error.extensions.category === 'validation' &&
      'validation' in error.extensions &&
      typeof error.extensions.validation === 'object'
    ) {
      message = Object.entries(error.extensions.validation as Record<string, string>)
        .flatMap(([, value]) => value)
        .map(v => v.replace('input.', ''))
        .join('\r\n')
    }

    // eslint-disable-next-line no-alert
    window.alert(message)
  }
  if (
    networkError &&
    (networkError as ServerError).statusCode !== undefined &&
    [401, 419].includes((networkError as ServerError).statusCode)
  ) {
    window.location.pathname = '/'
  }
})
