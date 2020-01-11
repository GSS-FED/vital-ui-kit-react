import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';

import { Test } from '.';

storiesOf('Packages | astroturf-playground', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Test />);
// .add('Custom size', () => (
//   <Avatar
//     badge={50}
//     size={number('size', 30)}
//     circle={boolean('circle', true)}
//     css={`border 4px solid black`}
//   />
// ));
