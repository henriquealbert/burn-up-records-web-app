import {
  FormControl,
  Radio as ChakraRadio,
  useBoolean,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
  FormControlProps
} from '@chakra-ui/react'
import { useController, Control } from 'react-hook-form'

export const Radio = ({
  name,
  showErrorMessage = true,
  label,
  options,
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
      d="flex"
      alignItems="center"
      {...props}
    >
      {label && (
        <FormLabel color="brand.gray.5" fontSize="lg" m="0" mr={6}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        size="lg"
        {...{
          onChange,
          onBlur,
          name,
          ref,
          value: value || ''
        }}
      >
        {options.map((opt) => (
          <ChakraRadio key={opt.value} value={opt.value} mr={6}>
            {opt.label}
          </ChakraRadio>
        ))}
        {invalid && blur && (
          <>
            {showErrorMessage && (
              <FormErrorMessage mt={0.5} ml={1}>
                {error.message}
              </FormErrorMessage>
            )}
          </>
        )}
      </RadioGroup>
    </FormControl>
  )
}

interface Props extends FormControlProps {
  name: string
  showErrorMessage?: boolean
  label?: string
  options: optionsType[]
  defaultValue?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}

type optionsType = {
  value: string
  label: string
}
