const Input = {
  variants: {
    outline: {
      field: {
        h: 14,
        border: '2px',
        borderRadius: 'lg',
        borderColor: 'brand.input.border.normal',
        fontSize: 'lg',
        color: 'brand.input.text.normal',
        _placeholder: {
          color: 'brand.input.text.normal'
        },
        _hover: {
          borderColor: 'brand.input.border.normal'
        },
        _focus: {
          boxShadow: 'none',
          border: '2px',
          borderColor: 'brand.input.border.focus',
          color: 'brand.input.text.focus'
        },
        _invalid: {
          boxShadow: 'none',
          border: '2px',
          borderColor: 'brand.error.1',
          color: 'brand.error.2'
        }
      }
    },
    flushed: {
      field: {
        h: '26px',
        borderColor: 'brand.7',
        pb: '8px',
        _placeholder: {
          color: 'brand.7',
          fontSize: 'sm',
          lineHeight: '18px'
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'black',
          borderBottom: '2px',
          pb: '7px'
        },
        _invalid: {
          boxShadow: 'none',
          borderBottom: '2px solid var(--chakra-colors-brand-2)',
          pb: '7px'
        }
      }
    }
  }
}

export default Input
