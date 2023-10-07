import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from '~/shared/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // @ts-ignore
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
