/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

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
  Hint,
  Addon,
  Icon,
  Button,
  Select,
} from '../src';

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
          <FieldInput isRequired label="Username">
            <Input placeholder="Enter your username" />
          </FieldInput>
          <FieldInput isRequired label="Fullname">
            <MultipleInput>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </MultipleInput>
          </FieldInput>
          <FieldInput isRequired label="Birthday">
            <MultipleInput>
              <Input placeholder="Month" />
              <Input placeholder="Day" />
              <Input placeholder="Year" />
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Website">
            <MultipleInput>
              <Addon>http://</Addon>
              <Input placeholder="LabelAddon on the left" />
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Comment" inline>
            <TextArea placeholder="Comment here" minRows={3} />
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
  .add(
    'Hint',
    withInfo(`Info`)(
      withNotes('')(() => (
        <FormWrapper>
          <FieldInput label="Username" inline>
            <Input value="dramsign" />
            <Hint text="Username is available" success />
            <Hint text="Example: James Allen" />
          </FieldInput>
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Multiple & Addon',
    withInfo(`Info`)(
      withNotes('')(() => (
        <FormWrapper>
          <FieldInput label="Weight" inline>
            <MultipleInput>
              <Input placeholder="LabelAddon on the right" />
              <Addon>kg</Addon>
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Price" inline>
            <MultipleInput>
              <Addon>
                <Icon className="icon-dollar" />
              </Addon>
              <Input placeholder="LabelAddon on the both" />
              <Addon>.00</Addon>
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Button" inline>
            <MultipleInput>
              <Input placeholder="LabelAddon on the both" />
              <Button nature="primary" flat>
                Search
              </Button>
            </MultipleInput>
          </FieldInput>
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Multiple & Button',
    withInfo(`Info`)(
      withNotes('')(() => (
        <FormWrapper>
          <FieldInput label="Button" inline>
            <MultipleInput>
              <Button>A</Button>
              <Button>B</Button>
              <Button>C</Button>
              <Input placeholder="LabelAddon on the both" />
            </MultipleInput>
          </FieldInput>
          <FieldInput label="Button" inline>
            <MultipleInput>
              <Input placeholder="LabelAddon on the both" />
              <Button nature="primary" flat>
                Search
              </Button>
            </MultipleInput>
          </FieldInput>
        </FormWrapper>
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
        <FormWrapper>
          <StatelessInput
            placeholder={text('Placeholder', 'Uncontrolled Input')}
            defaultValue={text('Default Value', 'default')}
            isDisabled={boolean('Disabled', false)}
            isAlarm={boolean('Alarm', false)}
            isWarning={boolean('Warning', false)}
          />
        </FormWrapper>
      )),
    ),
  )
  .add(
    'Controlled Input',
    withInfo(`Input handle by React state`)(
      withNotes('This is basic input style')(() => (
        <FormWrapper>
          <Input
            placeholder={text('Placeholder', 'Controlled Input')}
            isDisabled={boolean('Disabled', false)}
            isAlarm={boolean('Alarm', false)}
            isWarning={boolean('Warning', false)}
          />
        </FormWrapper>
      )),
    ),
  )
  .add(
    'With Icon',
    withInfo(`Icon in Left or Right`)(
      withNotes('insert icon component')(() => (
        <FormWrapper>
          <StatelessInput placeholder="Right side icon" icon="icon-search" />
          <br />
          <StatelessInput
            placeholder="Left side icon"
            icon="icon-search"
            iconPosition="left"
          />
        </FormWrapper>
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

storiesOf('Form/Select', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(``)(
      withNotes(`Uncontrolled component`)(() => (
        <FormWrapper>
          <Select placeholder="Select One" items={items} />
        </FormWrapper>
      )),
    ),
  );

const items = [
  { content: 'All Files', value: 'all' },
  { content: 'PDF', value: 'pdf' },
  { content: 'PPT', value: 'ppt' },
];

const groupItem = [
  { items: [{ content: 'yoyo', value: 'yoyo' }] },
  { items: [{ content: 'yoyo', value: 'yoyo' }] },
  { items: [{ content: 'yoyo', value: 'yoyo' }] },
];
