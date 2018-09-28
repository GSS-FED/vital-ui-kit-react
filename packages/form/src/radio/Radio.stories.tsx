import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { RadioGroup } from '.';

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
  .add('Basic', () => <RadioGroup items={items} />)
  .add('Disable', () => <RadioGroup items={items} disabled />);
