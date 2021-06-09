const Button = {
  baseStyle: {
    borderRadius: 'lg',
    fontWeight: 'medium',
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    primary: {
      py: 4,
      px: 12,
      h: 'auto',
      maxH: '52px',
      fontSize: 'lg',
      bgColor: 'brand.primary',
      color: 'white',
      _hover: {
        bgColor: 'brand.secondary.1'
      }
    },
    google: {
      py: 5,
      px: 6,
      h: 'auto',
      maxH: '64px',
      fontSize: 'lg',
      bgColor: 'brand.gray.6',
      color: 'white',
      justifyContent: 'flex-start',
      _hover: {
        bgColor: 'brand.gray.5'
      }
    },
    link: {
      color: 'brand.primary',
      textDecoration: 'underline',
      h: 'auto',
      _hover: {
        color: 'brand.secondary.1'
      }
    }
  }
}

export default Button
