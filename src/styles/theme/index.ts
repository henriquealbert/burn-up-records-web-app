import { extendTheme } from '@chakra-ui/react'
// Foundation style overrides
import colors from './foundations/colors'
import typography from './foundations/typography'
import global from './foundations/global'
// Component style overrides
import Button from './components/button'
import Heading from './components/heading'
import Input from './components/input'

const customTheme = extendTheme({
  ...global,
  colors,
  ...typography,
  components: { Button, Heading, Input }
})

export default customTheme
