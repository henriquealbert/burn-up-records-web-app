import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'red' }))

export default customTheme
