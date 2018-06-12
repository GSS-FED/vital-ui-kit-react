import { injectGlobal } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import { ThemeProvider } from '@gssfed/vital-ui-kit-react';

import '@gssfed/vital-ui-kit-react/dist/base/global.css';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

injectGlobal`
  #root {
    padding: 20px;
  }
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

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
// automatically import all files ending in *.stories.js
const req = require.context('../../', true, /.stories.jsx$/);
configure(loadStories, module);
