import {
  FormControl,
  InputGroup,
  InputProps,
  useBoolean,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'
import ReactSelect from 'react-select'

export const Select = ({
  name,
  placeholder,
  showErrorMessage = true,
  label,
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
            {...props}
          >
            {label && (
              <FormLabel color="brand.gray.5" fontSize="lg">
                {label}
              </FormLabel>
            )}
            <InputGroup d="flex" flexDirection="column">
              <ReactSelect placeholder={placeholder} {...field} />

              {isInvalid && blur && (
                <>
                  {showErrorMessage && (
                    <FormErrorMessage mt={0.5} ml={1}>
                      {form.errors[name]}
                    </FormErrorMessage>
                  )}
                </>
              )}
            </InputGroup>
          </FormControl>
        )
      }}
    </Field>
  )
}

interface Props extends InputProps {
  name: string
  placeholder?: string
  showErrorMessage?: boolean
  label?: string
}
