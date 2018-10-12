import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/react';
import { Value } from '@vital-ui/react-utils';
import { Switch } from './Switch';

storiesOf('Packages | Form/Switch', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Value<boolean> initial={true}>
      {({ value, set }) => (
        <Switch
          checked={value}
          onChange={value => set(value)}
          disabled={boolean('Disabled', false)}
          round={boolean('Round', false)}
        />
      )}
    </Value>
  ))
  .add('On/ off', () => (
    <Value<boolean> initial={true}>
      {({ value, set }) => (
        <Switch
          on="on"
          off="off"
          checked={value}
          onChange={value => set(value)}
          disabled={boolean('Disabled', false)}
          round={boolean('Round', false)}
        />
      )}
    </Value>
  ));
