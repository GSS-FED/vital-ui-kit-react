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

import { Pill } from '../../src';

storiesOf('Components | Pill', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is pill')(() => (
        <Pill.Group default={1} vertical={boolean('vertical', false)}>
          <Pill id={1} label="Dashboard" badge="23" />
          <Pill id={2} label="Projects" badge="99+" />
          <Pill id={3} label="Issues" badge="6" />
          <Pill id={4} label="Reports" />
          <Pill id={5} label="User Center" />
        </Pill.Group>
      )),
    ),
  );
