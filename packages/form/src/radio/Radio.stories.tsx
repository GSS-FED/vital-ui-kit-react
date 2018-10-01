import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Value } from '@vital-ui/react-utils';
import { RadioGroup, Radio } from '.';

const items = [
  { name: 'color', value: 'red', label: 'Red' },
  {
    name: 'color',
    value: 'blue',
    label: 'Blue',
    defaultChecked: true,
  },
  { name: 'color', value: 'yellow', label: 'Yellow' },
  { name: 'color', value: 'green', label: 'Green' },
];

storiesOf('Packages | Form/Radio', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Value<string> initial="red">
      {({ value, set }) => (
        <RadioGroup name="color" selectedValue={value} onChange={set}>
          <Radio label="red" value="red" />
          <Radio label="blue" value="blue" />
          <Radio label="yellow" value="yellow" />
        </RadioGroup>
      )}
    </Value>
  ))
  .add('Disable', () => (
    <RadioGroup name="color" disabled>
      <Radio label="red" value="red" />
      <Radio label="blue" value="blue" />
      <Radio label="yellow" value="yellow" />
    </RadioGroup>
  ));
