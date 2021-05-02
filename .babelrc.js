module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [
    ['import', { libraryName: 'antd', style: true }],
    ["styled-components", { "ssr": true }]
  ],
};
