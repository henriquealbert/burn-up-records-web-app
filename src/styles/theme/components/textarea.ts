const Textarea = {
  variants: {
    outline: {
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
  }
}

export default Textarea
