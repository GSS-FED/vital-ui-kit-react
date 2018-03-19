/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Avatar, AvatarBadge } from '../packages/';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Avatar')(() => (
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
          round={boolean('round', false)}
          outline={boolean('outline', false)}
        />
      )),
    ),
  );
