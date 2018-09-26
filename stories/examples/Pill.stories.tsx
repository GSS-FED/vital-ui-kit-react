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

import { Pill, PillsGroup } from '../../packages/pill/src';

storiesOf('Packages | Pill', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is pill')(() => (
        <PillsGroup vertical={boolean('vertical', false)}>
          <Pill badge="23">Dashboard</Pill>
          <Pill badge="99+">Projects</Pill>
          <Pill badge="6">Issues</Pill>
          <Pill>Reports</Pill>
          <Pill>User Center</Pill>
        </PillsGroup>
      )),
    ),
  );
