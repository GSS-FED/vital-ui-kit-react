/* eslint-disable no-unused-vars */

import * as React from 'react';
import styled from 'styled-components';
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

import {
  Label,
  Input,
  StatelessInput,
  FieldInput,
  TextArea,
  StatelessTextArea,
  MultipleInput,
} from '../lib/';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
`;

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add(
    'Full Example',
    withInfo(`Info`)(
      withNotes('')(() => (
        <FormWrapper>
          <FieldInput
            isRequired
            label="Username">
            <Input placeholder="Enter your username" />
          </FieldInput>
          <FieldInput isRequired label="Fullname">
            <MultipleInput
              firstInput={
                <Input placeholder="First Name" />
              }
              secondInput={
                <Input placeholder='Last Name' />
              }
            />
          </FieldInput>
          <FieldInput
            label="Comment"
            inline>
            <TextArea
              placeholder="Comment here"
              minRows={3}
            />
          </FieldInput>
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Input with Label',
    withInfo(`Info`)(
      withNotes('')(() => (
        <FormWrapper>
          <FieldInput
            isRequired={boolean('Required 1', true)}
            align={select('Align', {
              left: 'Left',
              right: 'Right',
            })}
            label="Username"
            inline={boolean('Inline', false)}>
            <Input placeholder={text('Placeholder 1', 'Enter your username')} />
          </FieldInput>
        </FormWrapper>
      )),
    ),
  )


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

storiesOf('Form/TextArea', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(``)(
      withNotes(`Uncontrolled component`)(() => (
        <StatelessTextArea
          placeholder={text('Placeholder', 'Uncontrolled Input')}
          disabled={boolean('Disabled', false)}
          alarm={boolean('Alarm', false)}
          warning={boolean('Warning', false)}
          minRows={3}
        />
      )),
    ),
  )
  .addDecorator(withKnobs)
  .add(
    'Controlled TextArea',
    withInfo(``)(
      withNotes(`with State`)(() => (
        <TextArea
          placeholder={text('Placeholder', 'Controlled Input')}
          disabled={boolean('Disabled', false)}
          alarm={boolean('Alarm', false)}
          warning={boolean('Warning', false)}
          minRows={3}
        />
      )),
    ),
  );
