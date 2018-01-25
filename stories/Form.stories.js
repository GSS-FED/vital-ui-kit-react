/* eslint-disable no-unused-vars */

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

import { Label, Input, StatelessInput, FieldInput } from '../lib/';

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add(
    'Input with Label',
    withInfo(`Info`)(
      withNotes('')(() => (
        <div style={{ maxWidth: '500px', padding: '40px' }}>
          <FieldInput
            isRequired={boolean('Required', false)}
            align={select('Align', {
              left: 'Left',
              right: 'Right',
            })}
            label="First Name"
            inline={boolean('Inline', false)}
            placeholder={text('Placeholder 1', 'Enter your first name')}
          />
          <FieldInput
            label="Last Name"
            align={select('Align', {
              left: 'Left',
              right: 'Right',
            })}
            inline={boolean('Inline', false)}
            placeholder={text('Placeholder 2', 'Enter your last name')}
          />
        </div>
      )),
    ),
  );

storiesOf('Form/Input', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`Stateless input. Uncontrolled component.
      visit https://reactjs.org/docs/uncontrolled-components.html for more
    `)(
      withNotes(`Uncontrolled component`)(() => (
        <StatelessInput
          placeholder={text('Placeholder', 'Uncontrolled Input')}
          defaultValue={text('Default Value', 'default')}
          isDisabled={boolean('Disabled', false)}
          isAlarm={boolean('Alarm', false)}
          isWarning={boolean('Warning', false)}
        />
      )),
    ),
  )
  .add(
    'Controlled Input',
    withInfo(`Input handle by React state`)(
      withNotes('This is basic input style')(() => (
        <Input
          placeholder={text('Placeholder', 'Controlled Input')}
          isDisabled={boolean('Disabled', false)}
          isAlarm={boolean('Alarm', false)}
          isWarning={boolean('Warning', false)}
        />
      )),
    ),
  );
