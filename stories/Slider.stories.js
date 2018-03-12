/* eslint-disable no-unused-vars */

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

import { Slider } from '../lib/';

const items = [
  {
    text: 'Dashboard',
    current: true,
  },
  { text: 'Projects', badge: '23' },
  { text: 'Issues', badge: '99+' },
  { text: 'Reports', badge: '6' },
  { text: 'User Center' },
];

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is slider')(() => (
        <Slider disabled={boolean('disabled', false)} value="0" max={number('max', 100)} min={number('min', 0)} step={number('step', 10)} />
      )),
    ),
  )
  .add(
    'with Custom Button',
    withInfo(`info`)(
      withNotes('This is slider with button')(() => (
        <Slider value="50" max="100" min="0" step="10" />
      )),
    ),
  )
