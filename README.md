<p align="center">
  <a href="https://react.vitaluikit.com">
    <img src="https://raw.githubusercontent.com/GSS-FED/vital-ui-kit/develop/assets/img/icon.png" height=72 />
    <img src="https://raw.githubusercontent.com/GSS-FED/vital-ui-kit-react/master/assets/uwillx.png" height=72 />
  </a>
</p>
<h3 align="center">Vital UI Kit React</h3>
<p align="center">
  Simple, Themeable, Customizable React UI library
  <br>
  <a href="http://react.vitaluikit.com/">
    <strong>View Storybook &raquo;</strong>
  </a>
  <br>
  <a href="https://github.com/GSS-FED/vital-ui-kit">
    <strong>Look for css version? &raquo;</strong>
  </a>
  <br>
</p>

[![CircleCI](https://circleci.com/gh/GSS-FED/vital-ui-kit-react/tree/master.svg?style=shield)](https://circleci.com/gh/GSS-FED/vital-ui-kit-react/tree/master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FGSS-FED%2Fvital-ui-kit-react.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FGSS-FED%2Fvital-ui-kit-react?ref=badge_shield)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## Intro
[Vital UI Kit](https://github.com/GSS-FED/vital-ui-kit) provide many UI components which are built for [Vital Cloud Services Family](https://www.gsscloud.com/en/). Vital UI Kit React encapsulated css style and components in order to achieve these goals:

- Themeable, build with styled-components 💅
- Composing simple components allows hight flexibility
- Consistent development environment, by encapsulating internal UI style.
- Easy to use, provide detailed API

## Demo

### Speed
An example of Offical Document contains all Vital UI Kit components

<img 
  src="https://raw.githubusercontent.com/GSS-FED/vital-ui-kit-react/master/assets/demo_screen_shot.png"
/>
<a href="https://speed-vital-react.netlify.com/"><b>View Demo</b></a>



### Bit
<img 
  src="https://cdn-images-1.medium.com/max/1600/1*C_gNgDDeyTO_SMXw5sIX5g.gif"
/>

<a href="https://bitsrc.io/gssfed/vital-ui-kit-react">
  Play them on BitSrc
</a>


## Getting Started

### Installation
```bash
# yarn
yarn add @gssfed/vital-ui-kit-react

# npm
npm i --save @gssfed/vital-ui-kit-react
```

```js
// ThemeProvider contains default theme and icon, you can override it.
import { Button, ThemeProvider } from '@gssfed/vital-ui-kit-react'
// recommend importing the global style.
import '@gssfed/vital-ui-kit-react/dist/base/global.css'

/* ... */
render() {
  return (
    <ThemeProvider theme={YOUR_CUSTOM_THEME} icon={ICON}>
      <Button>Vital 💜 React!</Button>
    </ThemeProvider>
  )
}
```

## Contributing

Make sure read our [contributing guide](https://github.com/GSS-FED/vital-ui-kit-react/blob/master/CONTRIBUTING.md) to learn about our development process.

## Roadmap

- docs
- layout
- box
- Table(page, checkbox, input, header)
- Calendar
