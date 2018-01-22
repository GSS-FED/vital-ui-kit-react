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

import { Checkbox, CheckboxGroup } from '../lib/';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'Checkbox',
    withInfo(`info`)(
      withNotes('This is checkbox')(() => (
        <Checkbox
          isRound={boolean('Round', false)}
          isDisabled={boolean('Disable', false)}
          label={text('Label', 'Label')}
        />
      )),
    ),
  )
  .add(
    'CheckboxGroup',
    withInfo(`info`)(
      withNotes('This is checkboxgroup')(() => (
        <CheckboxGroup>
          <Checkbox
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
          <Checkbox
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
          <Checkbox
            isRound={boolean('Round', false)}
            isDisabled={boolean('Disable', false)}
            label={text('Label', 'Label')}
          />
        </CheckboxGroup>
      )),
    ),
  );
