import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
  useBoolean,
  ScaleFade,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'

interface Props extends InputProps {
  name: string
  type: string
  placeholder: string
  showErrorMessage?: boolean
  label?: string
}

export const FormikInput = ({
  name,
  type,
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
              <Input {...field} type={type} placeholder={placeholder} />
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
