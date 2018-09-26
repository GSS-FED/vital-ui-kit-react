// @ts-ignore
import { createGlobalStyle, css } from 'styled-components';
// @ts-ignore
import { configure, addDecorator } from '@storybook/react';
import * as React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from '../packages/theme/dist';
import { gloablStyle } from '../packages/theme';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const fontFamily = css`
  html,
  body {
    font-family: 'Roboto', 'Helvetica', 'PingFang TC', 'Arial',
      'sans-serif', 'Microsoft JhengHei', 'Heiti TC';
  }
`;

const GlobalStyle = createGlobalStyle`
  #root {
    padding: 20px;
  }
  ${gloablStyle.linkStyle};
  ${gloablStyle.reset};
  ${gloablStyle.vitalTypographyStyle};
  ${fontFamily};
`;

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  styles: stylesheet => ({
    ...stylesheet,
    button: {
      ...stylesheet.button,
      topRight: {
        ...stylesheet.button.topRight,
        top: 'unset',
        bottom: '0',
      },
    },
  }),
});

setOptions({
  name: 'Vital UI Kit React',
  url: '#',
  addonPanelInRight: false,
  sortStoriesByKind: true,
  sidebarAnimations: false,
});

addDecorator(story => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));
// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context('../stories', true, /.stories.tsx$/);
configure(loadStories, module);
