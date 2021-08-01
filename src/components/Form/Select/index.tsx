import {
  FormControl,
  InputProps,
  useBoolean,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react'
import ReactSelect from 'react-select'
import { Control, FieldValues, useController } from 'react-hook-form'

export const Select = ({
  name,
  placeholder,
  showErrorMessage = true,
  label,
  options,
  isClearable = true,
  isSearchable = true,
  control,
  defaultValue,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    defaultValue
  })
  const getValue = () => options.find((opt) => opt.value === value)

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

      <ReactSelect
        {...{
          options,
          placeholder,
          styles: customStyles(invalid),
          name,
          isClearable,
          isSearchable,
          theme: customTheme,
          value: getValue(),
          onChange: (option) => onChange(option?.value || ''),
          onBlur,
          ref
        }}
      />

      {invalid && blur && showErrorMessage && (
        <FormErrorMessage mt={0.5} ml={1}>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'var(--chakra-colors-brand-secondary-1)',
    primary25: 'hsl(0, 100%, 95%)',
    primary50: 'hsl(0, 100%, 90%)'
  }
})

const customStyles = (isInvalid) => ({
  control: (provided, state) => ({
    ...provided,
    height: 'var(--chakra-sizes-14)',
    borderRadius: 'var(--chakra-radii-lg)',
    borderWidth: '2px',
    borderColor: state.isFocused
      ? 'var(--chakra-colors-black)'
      : isInvalid
      ? 'var(--chakra-colors-brand-error-1)'
      : 'var(--chakra-colors-brand-input-border-normal)',
    boxShadow: 'none',
    ':hover': {
      borderColor: state.isFocused
        ? 'var(--chakra-colors-black)'
        : isInvalid
        ? 'var(--chakra-colors-brand-error-1)'
        : 'var(--chakra-colors-brand-input-border-normal)'
    }
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '2px 16px'
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '18px',
    lineHeight: '23px',
    color: 'var(--chakra-colors-brand-input-text-normal)'
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
  option: (provided, state) => ({
    ...provided,
    fontSize: '18px',
    lineHeight: '23px',
    color: state.isSelected
      ? 'var(--chakra-colors-white)'
      : 'var(--chakra-colors-brand-text)'
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    borderRadius: 'var(--chakra-radii-lg)'
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
    borderRadius: 'var(--chakra-radii-lg)'
  })
})

interface Props extends InputProps {
  name?: string
  placeholder?: string
  showErrorMessage?: boolean
  label?: string
  options: Array<{ value: string; label: string }>
  isClearable?: boolean
  isSearchable?: boolean
  control: Control<FieldValues>
}
