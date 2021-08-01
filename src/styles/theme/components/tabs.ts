const Tabs = {
  variants: {
    enclosed: {
      tablist: {
        border: 'none'
      },
      tab: {
        bgColor: 'white',
        border: 'none',
        fontSize: '2xl',
        color: 'brand.gray.1',
        _selected: {
          color: 'black'
        },
        _focus: { boxShadow: 'none' },
        _disabled: { cursor: 'not-allowed' },
        p: 6,
        borderRadius: '8px 8px 0px 0px'
      },
      tabpanels: {
        h: 'full'
      },
      tabpanel: {
        bgColor: 'white',
        borderRadius: '0 24px 0 0',
        h: 'full',
        p: 14
      }
    }
  }
}

export default Tabs
