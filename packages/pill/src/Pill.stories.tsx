import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';

import { Pill, PillsGroup } from '.';

storiesOf('Packages | Pill', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <PillsGroup vertical={boolean('vertical', false)}>
      <Pill badge="23">Dashboard</Pill>
      <Pill badge="99+">Projects</Pill>
      <Pill badge="6">Issues</Pill>
      <Pill>Reports</Pill>
      <Pill>User Center</Pill>
    </PillsGroup>
  ));
