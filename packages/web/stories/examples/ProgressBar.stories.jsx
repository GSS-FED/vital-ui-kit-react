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

import { ProgressBar } from '../../src';

storiesOf('Components | ProgressBar', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is pill')(() => (
        <ProgressBar
          value={number('value', 60)}
          size={select(
            'size',
            { small: 'small', medium: 'medium', large: 'large' },
            'medium',
          )}
          alarm={boolean('alarm', false)}
          warning={boolean('warning', false)}
          success={boolean('succes', false)}
          showStatus={boolean('showStatus', true)}
          textLabel={text('textLabel', 'File uploading')}
        />
      )),
    ),
  );
