import { configure, addDecorator } from '@storybook/react';
import React from 'react';

import Theme from '../lib/styles/colors';
import { ThemeProvider } from 'styled-components';


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
