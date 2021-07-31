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
import { ReactNode } from 'react'
import { Control, useController } from 'react-hook-form'

export const Input = ({
  name,
  type,
  placeholder,
  showErrorMessage = true,
  label,
  labelTooltip,
  defaultValue,
  control,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    defaultValue
  })

  return (
    <FormControl
      id={name}
      isInvalid={invalid}
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
        <ChakraInput
          {...{
            onBlur,
            onChange,
            ref,
            value: value || '',
            type,
            placeholder
          }}
        />
        {invalid && blur && (
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
                {error.message}
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
  defaultValue?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
