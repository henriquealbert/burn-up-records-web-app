import {
  FormControl,
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
  options,
  isClearable = true,
  isSearchable = true,
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

            <ReactSelect
              options={options}
              placeholder={placeholder}
              styles={customStyles}
              name={name}
              onChange={(option) =>
                form.setFieldValue(name, option?.value || '')
              }
              isClearable={isClearable}
              isSearchable={isSearchable}
              theme={customTheme}
            />

            {isInvalid && blur && showErrorMessage && (
              <FormErrorMessage mt={0.5} ml={1}>
                {form.errors[name]}
              </FormErrorMessage>
            )}
          </FormControl>
        )
      }}
    </Field>
  )
}

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'var(--chakra-colors-brand-secondary-1)',
    primary25: 'hsl(0, 95%, 90%)',
    primary50: 'hsl(0, 95%, 85%)'
  }
})

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 'var(--chakra-sizes-14)',
    borderRadius: 'var(--chakra-radii-lg)',
    borderWidth: '2px',
    borderColor: state.isFocused
      ? 'var(--chakra-colors-black)'
      : 'var(--chakra-colors-brand-input-border-normal)',
    boxShadow: 'none',
    ':hover': {
      borderColor: state.isFocused
        ? 'var(--chakra-colors-black)'
        : 'var(--chakra-colors-brand-input-border-normal)'
    }
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '2px 16px'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: '2px',
    height: '40%',
    margin: 'auto',
    borderRadius: 'var(--chakra-radii-lg)',
    backgroundColor: 'var(--chakra-colors-brand-input-border-normal)'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingRight: '16px'
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '18px',
    lineHeight: '23px',
    color: 'var(--chakra-colors-brand-input-text-normal)'
  }),
  option: (provided) => ({
    ...provided,
    padding: '16px',
    fontSize: '18px',
    lineHeight: '23px'
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    borderRadius: 'var(--chakra-radii-lg)'
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 'var(--chakra-radii-lg)'
  })
}

interface Props extends InputProps {
  name: string
  placeholder?: string
  showErrorMessage?: boolean
  label?: string
  options: Array<{ value: string; label: string }>
  isClearable?: boolean
  isSearchable?: boolean
}
