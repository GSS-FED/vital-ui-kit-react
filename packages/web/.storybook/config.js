import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import { ThemeProvider } from '../src/Base';

import '../src/Base/styles/global.css'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

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
      }
    }
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

configure(loadStories, module);
