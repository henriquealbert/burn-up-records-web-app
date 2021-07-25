import {
  FormControl,
  Radio as ChakraRadio,
  useBoolean,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
  FormControlProps
} from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'

export const Radio = ({
  name,
  showErrorMessage = true,
  label,
  options,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        const isInvalid = !!form.errors[name] && !!form.touched[name]
        return (
          <FormControl
            id={name}
            isInvalid={isInvalid}
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
              {...field}
              name={name}
              size="lg"
              onChange={(value) => form.setFieldValue(name, value)}
            >
              {options.map((opt) => (
                <ChakraRadio key={opt.value} value={opt.value} mr={6}>
                  {opt.label}
                </ChakraRadio>
              ))}
              {isInvalid && blur && (
                <>
                  {showErrorMessage && (
                    <FormErrorMessage mt={0.5} ml={1}>
                      {form.errors[name]}
                    </FormErrorMessage>
                  )}
                </>
              )}
            </RadioGroup>
          </FormControl>
        )
      }}
    </Field>
  )
}

interface Props extends FormControlProps {
  name: string
  showErrorMessage?: boolean
  label?: string
  options: optionsType[]
}

type optionsType = {
  value: string
  label: string
}
