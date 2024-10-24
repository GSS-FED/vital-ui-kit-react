// @ts-ignore
import { withInfo } from '@storybook/addon-info';
// @ts-ignore
import { create } from '@storybook/theming';
import {
  addParameters,
  configure,
  addDecorator,
} from '@storybook/react';
import * as React from 'react';
import { withThemes } from 'storybook-styled-components';
import { createGlobalStyle, css } from 'styled-components';
import { globalStyle } from '../packages/theme/';
import { combinedWithComponent } from '../packages/theme/src';
import crmTheme from '../packages/theme/src/theme/crm';
import componentTheme from '../packages/theme/src/theme/crm/components';
import mainTheme from '../packages/theme/src/theme/default';

const vitalThemes = {
  Main: combinedWithComponent(mainTheme),
  CRM: combinedWithComponent(crmTheme, componentTheme),
};

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
  ${globalStyle.linkStyle};
  ${globalStyle.reset};
  ${globalStyle.vitalTypographyStyle};
  ${fontFamily};
`;

addDecorator(withInfo);
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Vital UI Kit React',
      brandUrl: 'vitaluikit.com',
    }),
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
  },
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator(withThemes(vitalThemes));
// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context('../packages', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
