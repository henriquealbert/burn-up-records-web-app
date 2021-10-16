const Button = {
  baseStyle: {
    borderRadius: '4px',
    fontWeight: 'normal',
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    outline: {
      py: 2,
      h: 'auto',
      maxH: '37px',
      borderRadius: '4px',
      fontSize: 'md',
      bgColor: 'white',
      color: 'brand.1',
      borderColor: 'brand.1',
      _hover: {
        bgColor: 'brand.1',
        color: 'white'
      },
      _disabled: {
        bg: 'white',
        color: 'brand.3',
        borderColor: 'brand.3',
        _hover: {
          bg: 'white',
          color: 'brand.3',
          borderColor: 'brand.3'
        }
      }
    },
    google: {
      py: '14px',
      bgColor: 'black',
      borderRadius: '8px',
      h: '46px',
      color: 'white',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18px',
      _hover: {
        bgColor: 'brand.10'
      },
      _disabled: {
        bgColor: 'brand.9',
        _hover: {
          bgColor: 'var(--chakra-colors-brand-9) !important'
        }
      }
    },
    link: {
      fontSize: 'md',
      fontWeight: 'normal',
      color: 'brand.1',
      _active: {
        color: 'brand.2'
      },
      _disabled: {
        color: 'brand.1'
      }
    }
  }
}

export default Button
