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

import { RadioGroup } from '../../../packages/web/src';

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

storiesOf('Components | Radio', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is radio')(() => <RadioGroup items={items} />),
    ),
  )
  .add(
    'Disable',
    withInfo(`info`)(
      withNotes('Disabled radio')(() => (
        <RadioGroup items={items} isDisabled />
      )),
    ),
  );
