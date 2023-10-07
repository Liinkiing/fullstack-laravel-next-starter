// @ts-ignore
import path from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs'

const EXCLUDED_DOCGEN_PROPS = [
  'htmlTranslate',
  'yes',
  'no',
  'as',
  '_hover',
  '_active',
  '_focus',
  '_highlighted',
  '_focusWithin',
  '_focusVisible',
  '_disabled',
  '_readOnly',
  '_before',
  '_after',
  '_empty',
  '_expanded',
  '_checked',
  '_grabbed',
  '_pressed',
  '_invalid',
  '_valid',
  '_loading',
  '_selected',
  '_hidden',
  '_autofill',
  '_even',
  '_odd',
  '_first',
  '_firstLetter',
  '_last',
  '_notFirst',
  '_notLast',
  '_visited',
  '_activeLink',
  '_activeStep',
  '_indeterminate',
  '_groupHover',
  '_peerHover',
  '_groupFocus',
  '_peerFocus',
  '_groupFocusVisible',
  '_peerFocusVisible',
  '_groupActive',
  '_peerActive',
  '_groupDisabled',
  '_peerDisabled',
  '_groupInvalid',
  '_peerInvalid',
  '_groupChecked',
  '_peerChecked',
  '_groupFocusWithin',
  '_peerFocusWithin',
  '_peerPlaceholderShown',
  '_placeholder',
  '_placeholderShown',
  '_fullScreen',
  '_selection',
  '_rtl',
  '_ltr',
  '_mediaDark',
  '_mediaReduceMotion',
  '_dark',
  '_light',
  '_horizontal',
  '_vertical',
]

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop, component) => {
        if (component.name === 'Box') {
          return false
        }
        if (EXCLUDED_DOCGEN_PROPS.includes(prop.name)) {
          return false
        }
        if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
          return false
        }

        return true
      },
    },
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src'),
      }
    }
    return config
  },
}
export default config
