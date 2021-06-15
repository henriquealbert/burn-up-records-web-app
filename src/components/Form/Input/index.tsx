import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
  useBoolean,
  ScaleFade
} from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'

interface Props extends InputProps {
  name: string
  type: string
  placeholder: string
}

export const FormikInput = ({ name, type, placeholder, ...props }: Props) => {
  const [blur, setBlur] = useBoolean()
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        const isInvalid = !!form.errors[name] && !!form.touched[name]
        return (
          <FormControl
            isInvalid={isInvalid}
            onFocus={setBlur.off}
            onBlur={setBlur.on}
            {...props}
          >
            <InputGroup>
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
              />
              {isInvalid && blur && (
                <ScaleFade in={blur} initialScale={0.5}>
                  <InputRightElement
                    fontSize="2xl"
                    color="brand.error.2"
                    fontWeight="bold"
                  >
                    !
                  </InputRightElement>
                </ScaleFade>
              )}
            </InputGroup>
          </FormControl>
        )
      }}
    </Field>
  )
}
