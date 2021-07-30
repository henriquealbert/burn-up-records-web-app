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
      },
      _disabled: {
        bg: 'brand.secondary.1',
        _hover: {
          bg: 'var(--chakra-colors-brand-secondary-1) !important'
        }
      }
    },
    secondary: {
      py: 4,
      px: 12,
      h: 'auto',
      maxH: '52px',
      fontSize: 'lg',
      bgColor: 'brand.secondary.2',
      color: 'white',
      _hover: {
        bgColor: 'brand.secondary.1'
      },
      _disabled: {
        bg: 'brand.secondary.1',
        _hover: {
          bg: 'var(--chakra-colors-brand-secondary-1) !important'
        }
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
      w: 'fit-content',
      _hover: {
        color: 'brand.secondary.1'
      },
      _active: {
        color: 'brand.secondary.1'
      },
      _disabled: {
        _hover: {
          textDecoration: 'underline'
        }
      }
    },
    linkSecondary: {
      color: 'brand.gray.4',
      textDecoration: 'underline',
      h: 'auto',
      w: 'fit-content',
      p: 0,
      _hover: {
        color: 'brand.gray.3'
      },
      _active: {
        color: 'brand.gray.3'
      },
      _disabled: {
        _hover: {
          textDecoration: 'underline'
        }
      }
    },
    menu: {
      color: 'brand.gray.4',
      fontWeight: 'medium',
      fontSize: 'lg',
      p: 0,
      justifyContent: 'flex-start',
      _hover: {
        color: 'brand.secondary.1'
      }
    }
  }
}

export default Button
