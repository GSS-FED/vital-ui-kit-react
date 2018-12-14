import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';

import { Avatar } from '.';

storiesOf('Packages | Avatar', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Avatar
      badge={text('badge', '99+')}
      size={select(
        'size',
        {
          xsmall: 'xsmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
        },
        'medium',
      )}
      gender={select(
        'gender',
        {
          unknown: null,
          male: 'male',
          female: 'female',
        },
        'unknown',
      )}
      circle={boolean('circle', false)}
      outline={boolean('outline', false)}
    />
  ));
// .add('Custom size', () => (
//   <Avatar
//     badge={50}
//     size={number('size', 30)}
//     circle={boolean('circle', true)}
//     css={`border 4px solid black`}
//   />
// ));
