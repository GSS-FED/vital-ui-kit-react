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

import { Pill } from '@vital-ui/react';

storiesOf('Packages | Pill', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is pill')(() => (
        <Pill.Group vertical={boolean('vertical', false)}>
          <Pill label="Dashboard" badge="23" />
          <Pill label="Projects" badge="99+" />
          <Pill label="Issues" badge="6" />
          <Pill label="Reports" />
          <Pill label="User Center" />
        </Pill.Group>
      )),
    ),
  );
