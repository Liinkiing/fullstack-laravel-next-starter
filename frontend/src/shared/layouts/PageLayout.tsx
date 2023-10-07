import type { BoxProps, ContainerProps, HeadingProps } from '@chakra-ui/react'
import { Box, Container, forwardRef, Heading } from '@chakra-ui/react'
import type { ComponentWithAs } from '@chakra-ui/system/dist/system.types'
import type { Except } from 'type-fest'

type Variant = 'larger' | 'default'

type Props = Except<ContainerProps, 'variant'> & {
  variant?: Variant
}

export const PageLayoutHeading = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  return <Heading ref={ref} as="h1" {...props} />
})

export const PageLayoutBody = forwardRef<BoxProps, 'div'>((props, ref) => {
  return <Box ref={ref} mt="space-64" {...props} />
})

type SubComponents = {
  Heading: typeof PageLayoutHeading
  Body: typeof PageLayoutBody
}

export const PageLayout = forwardRef<Props, 'main'>(({ as = 'main', children, ...props }, ref) => {
  return (
    <Container ref={ref} as={as} {...props}>
      {children}
    </Container>
  )
}) as ComponentWithAs<'main', Props> & SubComponents

PageLayout.Heading = PageLayoutHeading
PageLayout.Body = PageLayoutBody
