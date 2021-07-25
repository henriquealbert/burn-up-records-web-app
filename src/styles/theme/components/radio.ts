const Radio = {
  baseStyle: {
    label: {
      color: 'brand.gray.5'
    },
    control: {
      borderRadius: '2px',
      border: '1.5px solid #E8EAEB',
      _checked: {
        bgColor: 'transparent',
        border: '1.5px solid #E8EAEB',
        _hover: {
          bgColor: 'transparent',
          border: '1.5px solid #E8EAEB'
        },
        _before: {
          borderRadius: '2px',
          width: '12px',
          height: '12px',
          bgColor: 'brand.secondary.2'
        }
      },
      _focus: {
        boxShadow: 'none'
      }
    }
  }
}

export default Radio
