# Vital UI Kit React

## Demo
[Storybook Demo](http://react.vitaluikit.com/) 👯

 [BitSrc](https://bitsrc.io/gssfed/vital-ui-kit-react)
  💃

## Usage

### Installation
```bash
# yarn
yarn add @gssfed/vital-ui-kit-react

# npm
npm i --save @gssfed/vital-ui-kit-react
```

```js
// import package you need
import { Button, ThemeProvider } from '@gssfed/vital-ui-kit-react'
// recommend importing the global style
import '@gssfed/vital-ui-kit-react/dist/global.css'

/* ... */
render() {
  return (
    <ThemeProvider>
      <Button>Vital 💜 React!</Button>
    </ThemeProvider>
  )
}
```



## Development

`yarn install`

then run storybook

`yarn run storybook`

## Build

`yarn run build-storybook`

## Contributing

Make sure read our [contributing guide](https://github.com/GSS-FED/vital-ui-kit-react/blob/master/CONTRIBUTING.md) to learn about our development process.

## Roadmap

- docs
- Table(page, checkbox, input, header)
- Windows modal
- Calendar
