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

import { Switch } from '../../../packages/web/src';

storiesOf('Components | Switch', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is switch')(() => (
        <Switch
          isDisabled={boolean('Disabled', false)}
          isRound={boolean('Round', false)}
        />
      )),
    ),
  )
  .add(
    'with Icon Button',
    withInfo(`info`)(
      withNotes('This is switch')(() => (
        <Switch
          iconBtn="wifi"
          isDisabled={boolean('Disabled', false)}
          isRound={boolean('Round', false)}
        />
      )),
    ),
  )
  .add(
    'with Icon Label',
    withInfo(`info`)(
      withNotes('This is switch')(() => (
        <Switch
          iconLabelFront="wifi"
          iconLabelBack="wifi"
          isDisabled={boolean('Disabled', false)}
          isRound={boolean('Round', false)}
        />
      )),
    ),
  );
