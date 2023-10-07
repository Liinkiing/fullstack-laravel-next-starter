import { toRem } from '~/theme/utils/fonts'

export const typography = {
  fonts: {
    heading: `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    'body:xs': toRem(12),
    'body:sm': toRem(13),
    'body:md': toRem(14),
    'body:lg': toRem(16),
    'heading:xs': toRem(12),
    'heading:sm': toRem(14),
    'heading:md': toRem(16),
    'heading:lg': toRem(20),
    'heading:xl': toRem(24),
  },
  lineHeights: {
    'body:xs': toRem(16),
    'body:sm': toRem(20),
    'body:md': toRem(20),
    'body:lg': toRem(20),
    'heading:xs': toRem(16),
    'heading:sm': toRem(20),
    'heading:md': toRem(24),
    'heading:lg': toRem(32),
    'heading:xl': toRem(32),
  },
} as const
