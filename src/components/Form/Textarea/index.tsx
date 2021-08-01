import {
  FormControl,
  InputGroup,
  InputProps,
  useBoolean,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea
} from '@chakra-ui/react'
import { Control, useController } from 'react-hook-form'

export const Textarea = ({
  name,
  placeholder,
  showErrorMessage = true,
  label,
  rows,
  control,
  defaultValue,
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
        <FormLabel color="brand.gray.5" fontSize="lg">
          {label}
        </FormLabel>
      )}
      <InputGroup d="flex" flexDirection="column">
        <ChakraTextarea
          {...{
            rows,
            placeholder,
            name,
            onBlur,
            onChange,
            ref,
            value: value || ''
          }}
        />
        {invalid && blur && (
          <>
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
  placeholder?: string
  showErrorMessage?: boolean
  label?: string
  rows?: number
  defaultValue?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
