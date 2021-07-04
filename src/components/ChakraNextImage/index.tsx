import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

export const ChakraNextImage = chakra(NextImage, {
  baseStyle: { maxH: 200, maxW: 200 },
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'priority',
      'placeholder',
      'objectFit',
      'objectPosition',
      'loading',
      'layout',
      'blurDataURL'
    ].includes(prop)
})
