import {
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  InputProps,
  useBoolean,
  ScaleFade,
  FormErrorMessage,
  FormLabel,
  Flex
} from '@chakra-ui/react'
import { useField } from 'formik'
import { ReactNode } from 'react'

export const Input = ({
  name,
  type,
  placeholder,
  showErrorMessage = true,
  label,
  labelTooltip,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()
  const [field, meta] = useField(name)

  const isInvalid = !!meta.error && !!meta.touched
  return (
    <FormControl
      id={name}
      isInvalid={isInvalid}
      onFocus={setBlur.off}
      onBlur={setBlur.on}
      {...props}
    >
      {label && (
        <Flex alignItems="center" mb={2}>
          <FormLabel color="brand.gray.5" fontSize="lg" mb={0}>
            {label}
          </FormLabel>
          {labelTooltip}
        </Flex>
      )}
      <InputGroup d="flex" flexDirection="column">
        <ChakraInput {...field} type={type} placeholder={placeholder} />
        {isInvalid && blur && (
          <>
            <ScaleFade in={blur} initialScale={0.5}>
              <InputRightElement
                fontSize="2xl"
                color="brand.error.2"
                fontWeight="bold"
              >
                !
              </InputRightElement>
            </ScaleFade>
            {showErrorMessage && (
              <FormErrorMessage mt={0.5} ml={1}>
                {meta.error}
              </FormErrorMessage>
            )}
          </>
        )}
      </InputGroup>
    </FormControl>
  )
}

interface Props extends InputProps {
  name: string
  type: string
  placeholder?: string
  showErrorMessage?: boolean
  label?: string
  labelTooltip?: ReactNode
}
