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

import { Pill } from '../lib/';

storiesOf('Pill', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is pill')(() => (
        <Pill text="Hihi" badge="99" />
      )),
    ),
  );
