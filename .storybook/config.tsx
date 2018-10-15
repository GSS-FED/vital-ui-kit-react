// @ts-ignore
import { createGlobalStyle, css } from 'styled-components';
// @ts-ignore
import { configure, addDecorator } from '@storybook/react';
import * as React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { ThemeProvider } from '../packages/theme/dist';
import { gloablStyle } from '../packages/theme';
import { withInfo } from '@storybook/addon-info';
import mainTheme from '../packages/theme/src/theme';
import crmTheme from '../packages/theme/src/theme/crm/';
import { combinedWithComponent } from '../packages/theme/src';
import componentTheme from '../packages/theme/src/theme/crm/components';
import { withThemes } from 'storybook-styled-components';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const themes = {
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
  ${gloablStyle.linkStyle};
  ${gloablStyle.reset};
  ${gloablStyle.vitalTypographyStyle};
  ${fontFamily};
`;

export const baseFonts = {
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", "Arial", sans-serif',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
};

export const monoFonts = {
  fontFamily:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
};

addDecorator(withInfo);
addDecorator(
  withOptions({
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    name: 'Vital UI Kit React',
    url: '#',
    addonPanelInRight: false,
    sortStoriesByKind: true,
    sidebarAnimations: false,
    theme: {
      mainBackground: '#112 linear-gradient(to right, #112, #333)',
      mainBorder: '1px solid rgba(255,255,255,0.1)',
      mainBorderColor: 'rgba(255,255,255,0.1)',
      mainBorderRadius: 4,
      mainFill: 'rgba(255,255,255,0.1)',
      barFill: 'rgba(0,0,0,1)',
      barSelectedColor: 'rgba(255,255,255,0.4)',
      inputFill: 'rgba(0,0,0,1)',
      mainTextFace: baseFonts.fontFamily,
      mainTextColor: '#efefef',
      dimmedTextColor: 'rgba(255,255,255,0.4)',
      highlightColor: '#9fdaff',
      successColor: '#0edf62',
      failColor: '#ff3f3f',
      warnColor: 'orange',
      mainTextSize: 13,
      monoTextFace: monoFonts.fontFamily,
      layoutMargin: 10,
      overlayBackground:
        'linear-gradient(to bottom right, rgba(17, 17, 34, 0.6), rgba(51, 51, 51, 0.8))',
      brand: {
        background: 'rgba(0,0,0,1)',
      },
    },
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
  }),
);

addDecorator(story => (
  // <ThemeProvider<typeof crmTheme>
  //   theme={crmTheme}
  //   componentTheme={componentTheme}
  // >
  // {/* </ThemeProvider> */}
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator(withThemes(themes));
// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context('../packages', true, /.stories.tsx$/);
configure(loadStories, module);
