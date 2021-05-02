import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger{
  margin-left: 24px;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger, .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

`

export default GlobalStyle
