import { extendBaseTheme } from '@chakra-ui/react'

import { colors } from '~/theme/foundations/colors'
import { radii } from '~/theme/foundations/radii'
import { shadows } from '~/theme/foundations/shadows'
import { sizes } from '~/theme/foundations/sizes'
import { space } from '~/theme/foundations/space'
import { transition } from '~/theme/foundations/transition'
import { typography } from '~/theme/foundations/typography'

export const theme = extendBaseTheme({
  ...typography,
  config: {
    initialColorMode: 'light',
  },
  colors,
  space,
  radii,
  sizes,
  shadows,
  transition,
})
